import React, { useState, useEffect } from 'react';
import axios from 'axios';
import XMLParser from 'react-xml-parser';
import styled from 'styled-components'

/*

1. Block all public access - off

2. Bucket Policy

{
    "Version": "2008-10-17",
    "Statement": [
        {
            "Sid": "AllowPublicRead",
            "Effect": "Allow",
            "Principal": {
                "AWS": "*"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::xy883/*"
        }
    ]
}

3. CORS configuration

<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
<CORSRule>
    <AllowedOrigin>*</AllowedOrigin>
    <AllowedMethod>GET</AllowedMethod>
    <AllowedHeader>*</AllowedHeader>
</CORSRule>
</CORSConfiguration>

4. Public access - List objects, Read bucket permissions
*/


const H3 = styled.h3`
  color: black;
  cursor: pointer;
`;

export default function S3Explorer(props) {
  // Declare a new state variable, which we'll call "count"
  const [folderList, setFolderList] = useState([]);
  const [prefix, setPrefix] = useState('');

  async function fetchData() {
    const response = await axios.get(`https://${props.bucketName}.s3.amazonaws.com/?delimiter=%2F&prefix=${prefix}`, {
        headers: {
          'Content-Type': 'application/xml'
        }
      });

      var xml = new XMLParser().parseFromString(response.data);
      console.log(xml)
      let folderList = xml.children.map(item => {
        if (item.name === 'CommonPrefixes') {
          return {type: 'folder', name: item.children[0].value};
        }
        if (item.name === 'Contents') {
          return {type: 'file', name: item.children[0].value};
        }
        return null;
      });

      folderList = folderList.filter(item => item !== null);
      setFolderList(folderList);
  };

  useEffect(() => {
    fetchData();
  }, [prefix]);

  useEffect(() => {
    setPrefix(props.root);
  }, []);

  return (
    <div>
      <H3 onClick={e => setPrefix('')}>..</H3>
      {folderList.map(item => (
        <H3 key={item.name} onClick={e => setPrefix(item.name)}>{ item.type === 'folder' ? item.name.slice(0, -1).replace(/^.*[\\\/]/, '') : item.name.replace(/^.*[\\\/]/, '')}</H3>
      ))}
    </div>
  );
}
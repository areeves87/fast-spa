import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from './Card';
const data = [
  {
    title: 'My title1',
    description: 'This is my description1',
    thumbnailUrl:
      'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg',
  },
  {
    title: 'My title2',
    description: 'This is my description2',
    thumbnailUrl:
      'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    title: 'My title3',
    description: 'This is my description3',
    thumbnailUrl:
      'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/152964589-welcome-home-new-cat-632x475.jpg',
  },
  {
    title: 'My title4',
    description: 'This is my description4',
    thumbnailUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg/220px-An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg',
  },
  {
    title: 'My title5',
    description: 'This is my description5',
    thumbnailUrl:
      'https://www.rspcasa.org.au/wp-content/uploads/2019/01/Adopt-a-cat-or-kitten-from-RSPCA.jpg',
  },
  {
    title: 'My title6',
    description: 'This is my description6',
    thumbnailUrl:
      'https://images2.minutemediacdn.com/image/upload/c_crop,h_1191,w_2121,x_0,y_34/f_auto,q_auto,w_1100/v1554738990/shape/mentalfloss/78233-istock-965506882.jpg',
  },
  {
    title: 'My title7',
    description: 'This is my description7',
    thumbnailUrl:
      'https://www.pets4homes.co.uk/images/breeds/28/large/844034ad8c6aba6577aa73ea73001d00.jpg',
  },
  {
    title: 'My title8',
    description: 'This is my description8',
    thumbnailUrl:
      'https://www.americanhumane.org/app/uploads/2016/08/animals-cats-cute-45170-min-1024x569.jpg',
  },
  {
    title: 'My title9',
    description: 'This is my description9',
    thumbnailUrl:
      'https://cdn.mos.cms.futurecdn.net/dWUTTjhTSrzZYgzecuWgTj-320-80.jpg',
  },
  {
    title: 'My title0',
    description: 'This is my description0',
    thumbnailUrl:
      'https://conversation.which.co.uk/wp-content/uploads/2013/11/cat-kills-bird.jpg',
  },
  {
    title: 'My titleq',
    description: 'This is my description-',
    thumbnailUrl:
      'https://static01.nyt.com/images/2013/01/30/science/30cats-span/30cats-span-jumbo.jpg',
  },
  {
    title: 'My titlee',
    description: 'This is my descriptione',
    thumbnailUrl:
      'https://ak7.picdn.net/shutterstock/videos/2433077/thumb/1.jpg',
  },
  {
    title: 'My titler',
    description: 'This is my descriptionf',
    thumbnailUrl: 'https://i.ytimg.com/vi/YW5YWHtVsFI/hqdefault.jpg',
  },
  {
    title: 'My titlet',
    description: 'This is my descriptiond',
    thumbnailUrl:
      'https://st3.depositphotos.com/3540419/16174/v/600/depositphotos_161746570-stock-video-birds-eat-sunflower-seeds.jpg',
  },
  {
    title: 'My titley',
    description: 'This is my descriptions',
    thumbnailUrl:
      'https://upload.wikimedia.org/wikipedia/commons/c/cb/Nandayus_nenday_-sunflower_seeds_-Sarasota%2C_USA_-feral-8c.jpg',
  },
  {
    title: 'My titleu',
    description: 'This is my descriptions',
    thumbnailUrl:
      'https://t3.ftcdn.net/jpg/01/75/43/24/500_F_175432455_Y4ssbtQ1cNLzDaYFwOhNsM0pDyRQ6awU.jpg',
  },
];
class InfiniteScrollCard extends Component {
  state = {
    items: data,
  };

  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs

    this.setState({
      items: this.state.items.concat(data),
    });
  };

  render() {
    return (
      <div>
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <div className="fscard-container">
            {this.state.items.map((i, index) => (
              <Card
                title={i.title}
                description={i.description}
                thumbnailUrl={i.thumbnailUrl}
              />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default InfiniteScrollCard;

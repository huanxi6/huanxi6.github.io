import React from 'react';

const videos = [
  {
    id: 1,
    title: 'React Tutorial for Beginners',
    author: 'Programming with Mosh',
    thumbnail: 'https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg'
  },
  {
    id: 2,
    title: 'JavaScript Tutorial for Beginners',
    author: 'Programming with Mosh',
    thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5SIk/maxresdefault.jpg'
  },
  {
    id: 3,
    title: 'Node.js Tutorial for Beginners',
    author: 'Programming with Mosh',
    thumbnail: 'https://i.ytimg.com/vi/TlB_eWDSMt4/maxresdefault.jpg'
  },
  {
    id: 4,
    title: 'Python Tutorial for Beginners',
    author: 'Programming with Mosh',
    thumbnail: 'https://i.ytimg.com/vi/_uQrJ0TkZlc/maxresdefault.jpg'
  },
  {
    id: 5,
    title: 'Java Tutorial for Beginners',
    author: 'Programming with Mosh',
    thumbnail: 'https://i.ytimg.com/vi/eIrMbAQSU34/maxresdefault.jpg'
  },
  {
    id: 6,
    title: 'C# Tutorial for Beginners',
    author: 'Programming with Mosh',
    thumbnail: 'https://i.ytimg.com/vi/GhQdlIFylQ8/maxresdefault.jpg'
  },
  {
    id: 7,
    title: 'HTML Tutorial for Beginners',
    author: 'Programming with Mosh',
    thumbnail: 'https://i.ytimg.com/vi/pQN-pnXPaVg/maxresdefault.jpg'
  },
  {
    id: 8,
    title: 'CSS Tutorial for Beginners',
    author: 'Programming with Mosh',
    thumbnail: 'https://i.ytimg.com/vi/1Rs2ND1ryYc/maxresdefault.jpg'
  },
  {
    id: 9,
    title: 'React Native Tutorial for Beginners',
    author: 'Programming with Mosh',
    thumbnail: 'https://i.ytimg.com/vi/0-S5a0eXPoc/maxresdefault.jpg'
  },
  {
    id: 10,
    title: 'Angular Tutorial for Beginners',
    author: 'Programming with Mosh',
    thumbnail: 'https://i.ytimg.com/vi/k5E2AVpwsko/maxresdefault.jpg'
  },
  {
    id: 11,
    title: 'Vue.js Tutorial for Beginners',
    author: 'Programming with Mosh',
    thumbnail: 'https://i.ytimg.com/vi/4deVCNJq3qc/maxresdefault.jpg'
  },
  {
    id: 12,
    title: 'Django Tutorial for Beginners',
    author: 'Programming with Mosh',
    thumbnail: 'https://i.ytimg.com/vi/F5mRW0jo-U4/maxresdefault.jpg'
  },
  {
    id: 13,
    title: 'Ruby on Rails Tutorial for Beginners',
    author: 'Programming with Mosh',
    thumbnail: 'https://i.ytimg.com/vi/fmyvWz5TUWg/maxresdefault.jpg'
  },
  {
    id: 14,
    title: 'Swift Tutorial for Beginners',
    author: 'Programming with Mosh',
    thumbnail: 'https://i.ytimg.com/vi/comQ1-x2a1Q/maxresdefault.jpg'
  },
  {
    id: 15,
    title: 'Kotlin Tutorial for Beginners',
    author: 'Programming with Mosh',
    thumbnail: 'https://i.ytimg.com/vi/F9UC9DY-vIU/maxresdefault.jpg'
  }
];

function VideoCard({ video }) {
  const cardStyle = {
    borderRadius: '5px',
    boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.3)',
    margin: '10px',
    padding: '10px',
    display: 'inline-block',
    width: '30%'
  };

  const imgStyle = {
    borderRadius: '5px',
    width: '100%'
  };

  const titleStyle = {
    margin: '5px 0'
  };

  const authorStyle = {
    margin: '5px 0'
  };

  return (
    <div style={cardStyle}>
      <img src={video.thumbnail} alt={video.title} style={imgStyle} />
      <div>
        <h5 style={titleStyle}>{video.title}</h5>
        <p style={authorStyle}>{video.author}</p>
      </div>
    </div>
  );
}

function VideoList() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {videos.map(video => (
        <VideoCard video={video} key={video.id} style={{margin: '10px'}}/>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ margin: '50px 0' }}>Video List</h1>
      <VideoList />
    </div>
  );
}



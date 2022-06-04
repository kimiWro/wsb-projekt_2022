import React from 'react';
import './Mem.css';

const data = [{
    id: 1,
    title: 'Mem 1',
    upvotes: 5,
    downvotes: 9,
    img: './mem1.png',
  },

  {
    id: 2,
    title: "Mem 2",
    upvotes: 2,
    downvotes: 6,
    img: './mem2.png',
  },

  {
    id: 3,
    title: "Mem 3",
    upvotes: 2,
    downvotes: 2,
    img: './mem3.png',
  },

  {
    id: 4,
    title: "Mem 4",
    upvotes: 1,
    downvotes: 2,
    img: './mem4.png',
  },
  
  {
    id: 5,
    title: "Mem 5",
    upvotes: 1,
    downvotes: 4,
    img: './mem5.png',
  },

  {
    id: 6,
    title: "Mem 6",
    upvotes: 1,
    downvotes: 2,
    img: './mem6.png',
  },

  {
    id: 7,
    title: "Mem 7",
    upvotes: 1,
    downvotes: 8,
    img: './mem7.png',
  },

  {
    id: 8,
    title: "Mem 8",
    upvotes: 3,
    downvotes: 2,
    img: './mem8.png',
  },
];

class Mem extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        arrayOfMems: [...data],
        upvotes:0,
    }
  this.handleUpVouts=this.handleUpVouts.bind(this);
  }

handleUpVouts = () => {
  this.setState({
    upvotes: this.state.arrayOfMems.upvotes + 1
  });
}

  render() {  
    const {arrayOfMems} = this.state;
    const MemsFilter = arrayOfMems.filter((item) => {
      return item.upvotes <=5
    })
      return(
        <div>
          {MemsFilter.map((item)=>{
            return(
              <div key={item.id} className="MemContainer">
                <div className='Title'>{item.title}</div>
                <div className='image'>
                  <img src={item.img} alt='brak'/>
                </div>
                <div className='VotesContainer'>
                  <button className='Upvotes' onClick={this.handleUpVouts}>
                  upvotes <div className='UpVotesValue'>{this.state.upvotes} </div>
                  </button>
                  <button className='Downvotes'>  
                  downvote<div className='DownVotesValue'>{item.downvotes}</div>
                  </button>
                </div>
        </div>
      )
    })
  }
</div>
      )
  }
}

export default Mem;
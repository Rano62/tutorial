import React from 'react'
import ReactDom from 'react-dom'
//CSS
import './index.css';

//setup vars
 const books=[
   {
     id:1,
    author : 'Dav Pilkey',
    title :'Dog Man: Mothering Heights: From the Creator of Captain Underpants (Dog Man #10)',
    img:'https://m.media-amazon.com/images/I/71QuWEIWHlL._AC_UY218_.jpg',
    },
 {
   id:2,
   img:'https://images-eu.ssl-images-amazon.com/images/I/816TRYroBQS._AC_UL200_SR200,200_.jpg',
   title:'Idéfix et les Irréductibles - BD dérivée de la série',
   author:'René Goscinny',
 },
 {
   id:3,
    author : 'Roger Hargreaves',
    title :'Monsieur Madame - Mon papa',
    img:'https://images-eu.ssl-images-amazon.com/images/I/71vRPN%2BuqWL._AC_UL200_SR200,200_.jpg',
    },
];



function BookList(){
 return (
  <section className='booklist'>
    {books.map((book)=>{
    
      return <Book key={book.id} book={book}></Book>;
      
        
    })}
  </section>
 );
}

const Book = (props)=>{
  const {img, title,author}=props.book;
  const clickHandler = () => {
    alert('hello world');
  }

  return (
    <article className='book'>
      <img src={img} alt=""/>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
      reference example 
      </button>
    </article>
    );
};

ReactDom.render(<BookList/>,document.getElementById('root')
);



import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import axios from "axios";

function FreeBooks() {
  const[book,setBook]=useState([]);
    useEffect(() =>{
      const getBook =async () =>{
        try {
         const res= await axios.get("http://localhost:4001/book");
         console.log(res.data);
         setBook(res.data.filter((data)=>data.category==="Free"));
        } catch (error) {
          console.log(error);
        }
      };
      getBook();
    },[]);


  //const filterData=list.filter((data)=>data.category==="Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="text-3xl font-bold my-5 mx-5">Free Offered Books</h1>
          <h3 className="text-justify  my-3 mx-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque autrepudiandae et
            a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut
            assumenda excepturi exercitationem quasi. In deleniti eaque aut
            repudiandae et a id nisi.
          </h3>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {book.map((items) => (
              <Card items={items} key={items.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeBooks;

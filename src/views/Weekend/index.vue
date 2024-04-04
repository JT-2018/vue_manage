<template>
    <div class="weekend">
         <h2>Home</h2>
         <div class="picbox">
          <ul>
               <li><img src="./../../assets/img/c_cool.jpg" alt=""></li>
               <li><img src="./../../assets/img/c_maple.jpg" alt=""></li>
               <li><img src="./../../assets/img/c_joker.jpg" alt=""></li>
               <li><img src="./../../assets/img/c_bamboo.jpg" alt=""></li>
               <li><img src="./../../assets/img/c_nj.jpg" alt=""></li>
               <li><img src="./../../assets/img/c_sakura.jpg" alt=""></li>
               <li><img src="./../../assets/img/c_hat.jpg" alt=""></li>
               <li><img src="./../../assets/img/c_smile.jpg" alt=""></li>
               <li><img src="./../../assets/img/c_fish.jpg" alt=""></li>
          </ul>
         </div>
    </div>
 </template>
   
 <script>
   
 export default {
    
 }
 </script>
   
 <style lang="less" scoped>
     .weekend {
          width: 100%;
          .picbox {
               ul {
                    width: 900px;
                    height: 900px;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    li{
                         list-style: none;
                         text-align: center;
                         font-weight: bolder;
                         height: 290px;
                         width: 280px;
                         margin: 0 5px;
                         border: 1px solid white;
                         img {
                              line-height: 290px;
                              height: 290px;
                              width: 280px;
                              object-fit: cover;
                              object-position: left top;
                              text-align: center;
                              transition: 1s;
                         }
                         img:hover {
                              object-position: right bottom;
                         }
                    }
               }
          }
     }
 </style>
<template>
     <div class="home">
          <h2>Home</h2>
          <div class="container">
               <p class="eraser">
                    <span class="text">
                         在冰冷森林中

                         我已孤独穿行太久

                         像被扔的空罐头

                         谁在意心里的锈

                         那条泥泞的山坡

                         可以终结这寂寞

                         那就远走吧

                         奔向遥远的天际遨游

                         陪你昂首直到世界尽头

                         渴望的心不要理由

                         闪亮的青春岁月

                         紧握住温暖的双手

                         那些错过了风景的眼泪

                         为了珍惜今天所有

                         阳光下的旅途

                         艰难写满崭新的未知

                         是属于我的星球

                         让我不能停留

                         我们在追求

                         为了理想踯躅奔走

                         追忆童年的自由

                         已变成奢望的梦
                    </span>
               </p>
          </div>

     </div>
</template>

<script>

export default {

}
</script>

<style lang="less" scoped>
.home {
     width: 100%;
     .container {
          width: 60%;
          margin: 1em auto;
          font-family: '行楷-简', Courier, monospace;
          line-height: 2;
          text-indent: 2em;
          position: relative;
          .eraser {
               position: absolute;
               inset: 0;
               .text {
                    background: linear-gradient(to right, #fff, #f40);
               }
          }
     }
}
</style>
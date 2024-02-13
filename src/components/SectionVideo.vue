<script>
export default {
    name: "SectionVideo",
};
</script>

<template>
    <section id="jazz">
        <h5>WHO WE ARE</h5>
        <h2>SENSE THE JAZZ</h2>
        <p>The Story Of Jazz And Blues is the The Story Of Determination, Passion, Idealism, Community, And Of Course,
        Music. Founded In 1985 And Incorporated In 1986, As A Community Based, Not-Fro-Profit, Charitable Arts
        Organization Located In Vancouver, British Columbia, The Society, From The Very Beginning, Has Worked Diligently
        To Establish Vancouver As A Centre For The Creation And Exchange Of Sounds And Ideas Between The Local,
        National And International Music Communities</p>
        <button>READ MORE</button>
    </section>
    <section id="video">
        <font-awesome-icon :icon="'far fa-circle-play'" />
        <h2>NEW MUSIC VIDEO</h2>
    </section>    

   
</template>

<style lang="scss" scoped >

#jazz{
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 660px;
    margin: 0 auto;
}

 h5{
    color: #f2870c;
    text-align: center;
 }

 h2, 
 p {
    color: #ffffff;
    text-align: center;
 }



 button{
    padding: 10px 50px;
    background-color: transparent;
    border: 1px solid #ffffff;
    color: #ffffff;
    margin-top: 30px;
 }

 button:hover{
    background-color: #f2870c;
 }

 #video{
    height: 600px;
    background-image: url(../assets/img/Video-600x211.jpg);
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    h2{
        font-size: 32px;
    }
}

.fa-circle-play{
    font-size: 60px;
    color: #f2870c;
}


</style>
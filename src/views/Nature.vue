<template>
    <div class="nature">
        <div class="mainImg">
            <img :src="mainImg" :alt="mainImg.id">
        </div>
        <div class="slider">
            <i id="left" class="fas fa-angle-left fa-5x" @click="scroll(-350)"></i>
            <div class="imgSlider" id="slider">
                <div class="imgSliderItem" v-for="img in nature" :key="img.id">
                    <img :src="img.img" alt="img.id" @click="toMainImg(img)">
                </div>
            </div>
            <i id="right" class="fas fa-angle-right fa-5x" @click="scroll(350)"></i>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "Nature",
        data(){
            return{
                mainImg: '',
            }
        },
        methods:{
            loadMainImg(){
                this.mainImg = this.nature[0].img
            },
            toMainImg(img){
                if(this.mainImg != img.img){
                    img.clicks += 1;
                }
                this.mainImg = img.img;
            },
            sortArrays(a, b) {
                if(a.clicks < b.clicks){return 1} else if(a.clicks > b.clicks){return -1} else {return 0}
            },
            sortThis(){
                this.nature.sort(this.sortArrays)
            },
            scroll(x){
                let slider = document.getElementById('slider');
                slider.scrollBy(x, 0)
            }
        },
        computed: mapGetters(['nature']),
        created() {
            this.sortThis()
        },
        mounted() {
            this.loadMainImg()
        }
    }
</script>

<style scoped>
    .nature{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 15px;
    }
    .mainImg img{
        height: 50vh;
        border-radius: 30px;
        border: 2px solid grey;
        margin-bottom: 10px;
    }
    .imgSlider{
        display: flex;
        width: 80vw;
        flex-wrap: nowrap;
        overflow-x: hidden;
        scroll-behavior: smooth;
        border: 2px solid grey;
        border-radius: 20px;
        padding: 5px;
    }
    .imgSliderItem img{
        height: 20vh;
        margin: 5px;
    }
    .slider{
        display: flex;
        align-items: center;
    }
    .slider i{
        margin: 1vw;
        color: grey;
    }
    .slider i:hover{
        cursor: pointer;
        color: #2c3e50;
    }
</style>
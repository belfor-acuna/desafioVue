<template>
    <div class="container-fluid bg-dark py-5">
        
        <div class="carousel-container justify-content-center d-flex">
                <div id="main-carousel3" class="carousel slide w-75 text-white" data-bs-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-bs-target="#main-carousel3" data-bs-slide-to="0" class="active" aria-current="true" aria-label="First slide"></li>
                        <li data-bs-target="#main-carousel3" data-bs-slide-to="1" aria-label="Second slide"></li>
                        <li data-bs-target="#main-carousel3" data-bs-slide-to="2" aria-label="Third slide"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                            <img src="https://images.ctfassets.net/usf1vwtuqyxm/1ciQISb1SPcgnY0Q6FwTwj/1c5d1b491460ef5364a4f23303844388/harry-ron-hermione-web-header.jpg" class="w-100 d-block" alt="First slide">
                            <div class="carousel-caption d-none d-md-block">
                                <h3 class="btn btn-primary btn-outline-light" @click="navigateTo('students')">Estudiantes</h3>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://w7w5t4b3.rocketcdn.me/wp-content/uploads/2019/01/harry-potter-spells-avada-kedavra-1.jpg"  class="w-100 d-block" alt="Second slide">
                            <div class="carousel-caption d-none d-md-block">
                                <h3 class="btn btn-primary btn-outline-light" @click="navigateTo('spells')">Hechizos</h3>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://imgix.ranker.com/list_img_v2/16025/2916025/original/2916025" class="w-100 d-block" alt="Third slide">
                            <div class="carousel-caption d-none d-md-block">
                                <h3 class="btn btn-primary btn-outline-light" @click="navigateTo('teachers')">Profesores</h3>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#main-carousel3" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#main-carousel3" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
        </div>
    </div>
</template>
<style>
.carousel-item{
    position: relative;
    padding-top: 56.25%;
    overflow: hidden;
    width: 100%;
    height: 0;
}
.carousel-item img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
<script>
export default {
    name: "HomeView",
    methods:{

        navigateTo(route){
            this.$router.push(route);
        }

    }
};
</script>
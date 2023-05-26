<template>
    <div class="container-fluid bg-dark py-5 bg-dark">
        
        <div class="carousel-container justify-content-center d-flex col-xl-12 col-xs-6">
                <div id="main-carousel3" class="carousel slide w-100 text-white" data-bs-ride="carousel">
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
        <main>

            
            <!-- Marketing messaging and featurettes
          ================================================== -->
            <!-- Wrap the rest of the page in another container to center all the content. -->
        
            <div class="container marketing">        
              <hr class="featurette-divider">
        
              <div class="row featurette">
                <div class="col-md-7">
                  <h2 class="featurette-heading">¿Sabias que? <span class="text-muted">It’ll blow your mind.</span>
                  </h2>
                  <p class="lead">Daniel Radcliffe y Rupert Grint han admitido que ambos se quedaron enamorados de Emma Watson en las primeras películas, pero la que cosa no pasó de un bonito amor platónico.</p>
                </div>
                <div class="col-md-5">
                  <img src="https://hips.hearstapps.com/hmg-prod/images/harry-potter-y-la-piedra-filosofal-677923633-large-1636701473.jpg" alt="" class="w-100">
        
                </div>
              </div>
        
              <hr class="featurette-divider">
        
              <div class="row featurette">
                <div class="col-md-7 order-md-2">
                  <h2 class="featurette-heading">Todos los hechizos están en latín. <span class="text-muted">See for yourself.</span></h2>
                  <p class="lead">Los hechizos en Harry Potter están compuestos por palabras en latín. Por ejemplo, 'Lumos', que convierte una varita en una antorcha, proviene de la palabra latina 'lumen', que significa luz, y 'Obliviate' proviene de la palabra latina 'obliviscor', que significa 'olvido'.

                    El lema de Hogwarts también está en latín y dice "Draco dormiens nunquam titillandus", que significa "Nunca hagas cosquillas a un dragón dormido". ¡No digas que no te advertimos!.</p>
                </div>
                <div class="col-md-5 order-md-1">
                  <img src="https://hips.hearstapps.com/hmg-prod/images/mv5bmtg4oda3mjyym15bml5banbnxkftztcwmtuxodcwngatat-v1-sx1663-cr0-0-1663-999-al-1589923290.jpg" class="w-100">
        
                </div>
              </div>
        
              <hr class="featurette-divider">
        
              <div class="row featurette">
                <div class="col-md-7">
                  <h2 class="featurette-heading">El mayor miedo de Voldemort <span class="text-muted">Checkmate.</span></h2>
                  <p class="lead">Si Voldemort se topase con un boggart, el no-ser amortal encarnaría su propio cadáver, ya que la muerte siempre fue el mayor temor del mayor enemigo de Harry.</p>
                </div>
                <div class="col-md-5">
                  <img src="https://cdn.superaficionados.com/imagenes/voldemort-cke.jpg" alt="" class="w-100">
        
                </div>
              </div>
        
              <hr class="featurette-divider">
        
            
        
            </div><!-- /.container -->
        
          </main>
         
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
            this.$router.push({
                name:route
            });
        }

    }
};
</script>
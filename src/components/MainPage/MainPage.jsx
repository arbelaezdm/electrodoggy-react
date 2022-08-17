import React from "react";

const MainPage = () => {
  return (
    <html lang="en">
      <body>
        <main class="home-main">
          <div class="home-slider">
            <div class="home-slider-img" id="slider">
              <div class="home-slider-section">
                <img
                  src="/images/productos/<%= products[1].image %>"
                  alt=""
                  class="home-banner-img"
                />
              </div>
            </div>

            <div class="home-flechas-slider home-flechas-slider-derecha">
              <i class="fas fa-chevron-right"></i>
            </div>

            <div class="home-flechas-slider home-flechas-slider-izquierda">
              <i class="fas fa-chevron-left"></i>
            </div>

            <div class="home-bullets">
              <div class="home-bullets-1">
                <i class="fas fa-circle"></i>
              </div>
              <div class="home-bullets-2">
                <i class="fas fa-circle"></i>
              </div>
              <div class="home-bullets-3">
                <i class="fas fa-circle"></i>
              </div>
            </div>
          </div>

          <section class="home-destacados">
            <div class="home-titulo">
              <h4>Lo mejor del mundo Gamer</h4>
              <button>
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
            <div class="home-destacados-img"></div>
          </section>

          <section class="home-todo-vitrinas">
            <div class="home-titulo">
              <h4>Los mejores descuentos</h4>
              <button>
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
            <div class="home-vitrinas">
              <div class="home-flechas-vitrinas home-flechas-vitrinas-derecha">
                <i class="fas fa-chevron-right"></i>
              </div>
              <div class="home-flechas-vitrinas home-flechas-vitrinas-izquierda">
                <i class="fas fa-chevron-left"></i>
              </div>
            </div>
            <div class="home-bullets">
              <div class="home-bullets-1">
                <i class="fas fa-circle"></i>
              </div>
              <div class="home-bullets-2">
                <i class="fas fa-circle"></i>
              </div>
              <div class="home-bullets-3">
                <i class="fas fa-circle"></i>
              </div>
            </div>
          </section>

          <section class="home-todo-vitrinas">
            <div class="home-titulo">
              <h4>Los más vendidos</h4>
              <button>
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
            <div class="home-vitrinas">
              <div class="home-flechas-vitrinas home-flechas-vitrinas-derecha">
                <i class="fas fa-chevron-right"></i>
              </div>
              <div class="home-flechas-vitrinas home-flechas-vitrinas-izquierda">
                <i class="fas fa-chevron-left"></i>
              </div>
            </div>
            <div class="home-bullets">
              <div class="home-bullets-1">
                <i class="fas fa-circle"></i>
              </div>
              <div class="home-bullets-2">
                <i class="fas fa-circle"></i>
              </div>
              <div class="home-bullets-3">
                <i class="fas fa-circle"></i>
              </div>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
};

export default MainPage;

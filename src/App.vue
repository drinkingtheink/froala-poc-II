<template>
<div id="app">
  <section class="fdb-block py-0 my-5">
    <div class="container bg-r py-5" style="background-image: url(imgs/shapes/1.svg);">
      <div class="row justify-content-start">
        <div class="col-12 col-sm-10 col-md-8 text-center text-sm-left">
          <h1>UDP by Okta</h1>
          <p class="lead">Generate a quick mock up of a digital experience tailored to you, with identity managed by Okta.</p>
        </div>
      </div>
    </div>

    <section class="steps-display">
          <div class="step step-1" :class="{ active: headerFound }">
            <i v-if="headerFound" class="fas fa-check"></i>
            <i v-else class="far fa-question-circle"></i>
            <div>
              <h3>Step 1</h3>
              <p>Choose a header</p>
            </div>
          </div>
        
          <div class="step step-2" :class="{ active: bodyFound }">
            <i v-if="bodyFound" class="fas fa-check"></i>
            <i v-else class="far fa-question-circle"></i>
            <div>
              <h3>Step 2</h3>
              <p>Choose body content</p>
            </div>
          </div>
        
          <div class="step step-3" :class="{ active: footerFound }">
            <i v-if="footerFound" class="fas fa-check"></i>
            <i v-else class="far fa-question-circle"></i>
            <div>
              <h3>Step 3</h3>
              <p>Choose a footer</p>
            </div>
          </div>
        </section>
  </section>

  <section class="fdb-block p-2" id="navigator">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-md">
        <button class="navbar-toggler mr-auto ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav0" aria-controls="navbarNav0" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse mt-2 mt-md-0" id="navbarNav0">
          <nav class="m-auto">
            <router-link to="/headers" class="btn btn-outline-primary m-1">Headers</router-link>
            <router-link to="/call-to-action" class="btn btn-outline-primary m-1">Call To Action</router-link>
            <router-link to="/contacts" class="btn btn-outline-primary m-1">Contacts</router-link>
            <router-link to="/contents" class="btn btn-outline-primary m-1">Contents</router-link>
            <router-link to="/features" class="btn btn-outline-primary m-1">Features</router-link>
            <router-link to="/forms" class="btn btn-outline-primary m-1">Forms</router-link>
            <router-link to="/pricings" class="btn btn-outline-primary m-1">Pricings</router-link>
            <router-link to="/teams" class="btn btn-outline-primary m-1">Teams</router-link>
            <router-link to="/testimonials" class="btn btn-outline-primary m-1">Testimonials</router-link>
            <router-link to="/footers" class="btn btn-outline-primary m-1">Footers</router-link>
          </nav>
        </div>
      </nav>
    </div>
  </section>

  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view @newHeaderMarkup="updateHeaderMarkup"></router-view>
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      headerMarkup: null,
      bodyMarkup: null,
      footerMarkup: null
    }
  },
  computed: {
    headerFound() {
      return !!this.headerMarkup;
    },
    bodyFound() {
      return !!this.bodyMarkup;
    },
    footerFound() {
      return !!this.footerMarkup;
    }
  },
  methods: {
    updateHeaderMarkup(markup) {
      this.headerMarkup = markup;
    }
  }
};
</script>

<style lang="scss">
#navigator {
  position: sticky;
  top: 0;
  z-index: 1000;
}

#navigator .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

@media (max-width: 720px) {
  #navigator {
    border-bottom: 1px solid #ccc;
  }
}

#navigator a {
  font-size: 14px;
}

#navigator + section {
  padding: 250px 0;
}

.markup-select {
  padding: 5px;
  background-color: rgba(0,0,0,0.3);
  display: flex;

  button {
    width: 5rem;
    border-radius: 5px;
    margin-right: .5rem;

    &:hover {
      cursor:pointer;
    }
  }

  header {
    width: 100%;

    &.selected {
      border: 2px solid green;
    }
  }
}

.steps-display {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 120%;
  text-transform: uppercase;

  .step {
    opacity: 0.7;
    transition: all .2s;
    padding: 1rem;
    display: flex;
    border-radius: 10px;
    border: 2px solid rgba(0,0,0,0.1);
    margin-right: .5rem;

    &:hover,
    &.active {
      opacity: 1;
    }

    i {
      padding-right: 1rem;
      margin-top: 1rem;
    }

    &.active {
      i {
      color: green;
    }
  }
  }
}

$fa-font-path : "~@fortawesome/fontawesome-free-webfonts/webfonts";
@import "~@fortawesome/fontawesome-free-webfonts/scss/fontawesome.scss";
@import "~@fortawesome/fontawesome-free-webfonts/scss/fa-solid.scss";
@import "~@fortawesome/fontawesome-free-webfonts/scss/fa-regular.scss";
@import "~@fortawesome/fontawesome-free-webfonts/scss/fa-brands.scss";
</style>
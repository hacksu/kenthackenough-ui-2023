<template>
  <div id="login">

    <div class="back" style="">
      <div class="squiggly" style="opacity: 0.02;">

      </div>
    </div>

    <div style="display: block; height: 100px; margin: 0px; margin-bottom: -70px; padding-top: 10vh;"></div>
    <h6 id="auth-subtitle"><img style="height: 10vh;" src="../assets/KHE_Birthday.svg"/></h6>
    <div class="auth-container">
      <h2 id="auth-title">Login</h2>
      <!--<h6 id="auth-subtitle">I've seen you 'round these parts.</h6>-->
      <div id="error-message"> {{ error }}</div>
      Email:<br>
      <input id="login-username"
            class="simple-text-input"
            type="text"
            placeholder="jane@doe.com"
            v-model="email"
            />
      <br>
      Password:<br>
      <input id="login-password"
            class="simple-text-input"
            type="password"
            placeholder=""
            v-model="password"
            />
      <br>
      <br>

      <button class="gold-clear-button" style="font-size: 2vmin !important;" @click="login()">
        Login!
      </button>
      <br>
      <br>

      <router-link tag="span" to="/register" class="buttonInput">
        No account? Register!
      </router-link>
      <br>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      password: '',
      email: '',
      error: ''
    };
  },
  methods: {
    login() {
    // Verify that both
      this.err = '';
      this.$parent.wrapper.userManager.login(this.email, this.password)
      .then((data) => {
        this.$parent.user._id = data.key;
        this.$parent.user.email = data.email;
        this.$parent.user.role = data.role;
        this.$parent.showLogin = false;
        this.$router.push('/');
      })
      .catch((err) => {
        this.error='Your email or password is incorrect!';
      });
    }
  }
};
</script>

<style scoped lang="scss">
  @import '@/globalVars.scss';

  /*#login {
    background: $light-blue;
    height: 100vh;
    width: 100vw;
  }

  .vines {
    box-sizing: border-box;
    border: 30px solid rgba(0,0,0,0.5);
    border-image-repeat: round;
    border-image-slice: 97;
    border-image-width: 1;
    border-image-outset: .4;
  }

  ::placeholder {
    opacity: .8;
  }

  :-ms-input-placeholder {
    opacity: .8
  }

  .buttonInput {
    transition-duration: .5s;
    height: 30px;
    padding-right: 10px;
    padding-left: 10px;
    outline: none;
    border: none;
    cursor: pointer;
  }

  #dialog {
    padding-bottom: 25px;
  }*/

  #login .back {
  background: linear-gradient(45deg,#FFECB8,#FFE499 95%);
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
  overflow: hidden;
}
#login .back .squiggly {
  margin-top: 8vh;
  height: 84vh;
  width: 100vw;
  position: absolute;
  top: 0px;
  left: 0px;
  background-image: url(../assets/squiggly-back.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: -2;
}
#login .back img {
  width: 100vw;
  opacity: 0.02;
  z-index: -5;
}

  #error-message{
    font-size: 15px;
    color: red;
    padding-bottom: 15px;
  }

  #login {
    height: calc(100vh - 53px);
    width: 100vw;
  }

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      opacity: .8;
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      opacity: .8
    }

    .buttonInput {
      transition-duration: .5s;
      height: 30px;

      padding-right: 10px;
      padding-left: 10px;
      outline: none;
      border: none;
      cursor: pointer;
    }
    #dialog {
      padding-bottom: 25px;
    }

</style>

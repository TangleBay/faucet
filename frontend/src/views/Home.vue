<template>
  <div class="home">
    <div class="hero">
      <h1 class="heading">
        IOTA Faucet
      </h1>
      <br>
      <p class="sub-heading">
        <i18n path="subheadline" />
      </p>
    </div>

    <div class="section section-background">
      <div class="container">
        <h4>
          <i18n path="available_tokens" />
          {{ total_tokens }}
        </h4>
        <br>
        <Form />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Form from '@/components/Form';
import axios from 'axios';

export default {
	name: 'Home',
	components: {
		Form
	},
	data() {
		return {
			total_tokens: '',
			network: process.env.VUE_APP_NETWORK
		};
	},
	created() {
		this.getTotalTokens();
	},
	methods: {
		getTotalTokens() {
			let self = this;
			axios
				.get(process.env.VUE_APP_URL + '/get_balance')
				.then(response => {
					self.total_tokens = response.data.balance;
				})
				.catch(err => {
					console.log('err', err);
				});
		}
	}
};
</script>

<style lang="scss">
.el-main {
  padding: 0px !important;
}
.home {
  text-align: center;
}
.hero {
  margin: 0 10px;
}
.section {
  padding: 80px 0;
  &-background {
    background-color: var(--light);
    p {
      max-width: 600px;
      margin: 15px auto 30px;
    }
    a {
      text-decoration: none;
    }
  }

  .headline-wrapper {
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  button {
    margin: 0 auto;
    max-width: 500px;
    margin-top: 15px;
    padding: 15px 20px;
    border: 0;
    border-radius: 8px;
    outline: none;
    color: #fff;
    font-size: 24px;
    line-height: 29px;
    text-decoration: none;
    background-color: var(--primary);
    box-shadow: var(--primary);
    cursor: pointer;
    &:hover {
      background-color: var(--primary-darken);
    }
  }
}
.CURL{
  background-color: rgb(202, 202, 202);
  text-align: left;
  display: inline-block;
  padding: 2rem;
  margin-bottom: 1rem;
}
@media only screen and (max-width: 740px) {
  .hero {
    padding-top: 40px;
  }
  .headline-wrapper {
    flex-wrap: wrap;
    h2 {
      margin-bottom: 20px;
    }
  }
  .btn-social {
    margin-bottom: 5px !important;
  }
}
</style>
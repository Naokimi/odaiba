<template>
  <div>
    <header>
      <nav
        class="flex items-center justify-between flex-wrap bg-yellow-400 px-4 py-2"
        style="background-color: #f7be2a"
      >
        <router-link to="/">
          <div class="flex items-center flex-shrink-0 text-white mr-6 w-32">
            <img
              src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fc492df2-4463-4e08-b4a2-1c6f7708db10/odaiba-logo-icon-inverted-2.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200627T013208Z&X-Amz-Expires=86400&X-Amz-Signature=b2834e8461b80e30407742e0f0e41ba300e149c4aa6b5bdfbc7d6b2b0d5a559c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22odaiba-logo-icon-inverted-2.svg%22"
            />
          </div>
        </router-link>

        <div class="flex items-center flex-shrink-0">
          <div>
            <a
              href="#"
              class="inline-flex items-center font-semibold text-xl px-4 py-2 leading-none text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              ><img
                class="w-8 mr-4 bg-white rounded-full"
                src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c3fa12ba-dbc1-4c80-bb2b-efcb1e8a4273/icons8-finn-96.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200626T110244Z&X-Amz-Expires=86400&X-Amz-Signature=0fc60a68d61741cfb3b9aac08959cbcd5c8b25db5f409fdadc98ccf77b3a778c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22icons8-finn-96.png%22"
                alt="student-avatar"
              />
              Kenta Kimura</a
            >
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {};
  },
};
</script>

<style lang="css" scoped></style>

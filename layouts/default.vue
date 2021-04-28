<template>
  <div>
    <v-app>
      <!-- Navigation drawer right side start -->
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant="miniVariant"
        :clipped="clipped"
        fixed
        app
        color="PRIMARY"
      >
        <!--Navigation drawer  list start -->
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <!--Navigation drawer  list start end -->
      </v-navigation-drawer>
      <!-- Navigation drawer right side end -->
      <!-- main header start -->
      <v-app-bar :clipped-left="clipped" color="PRIMARY" fixed app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title v-text="title" />

        <v-spacer />
        <!-- left side part start -->
        <v-btn icon>
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-bell</v-icon>
        </v-btn>

        <v-avatar size="30">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <v-menu transition="slide-x-transition" bottom right offset-y>
          <template v-slot:activator="{ on, attrs }">
            <!-- vertical dot satrt -->
            <v-btn v-bind="attrs" v-on="on" icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, i) in subMenu"
              :key="i"
              router
              :to="item.to"
              exact
            >
              <v-icon class="mr-3">{{ item.icon }}</v-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
          <!-- vertical dot satrt -->
        </v-menu>
        <!-- left side part start -->
      </v-app-bar>
      <!-- main header end -->

      <v-main class="BACKGROUND">
        <v-container>
          <nuxt />
        </v-container>
      </v-main>
      <!-- footer current year start -->
      <!-- <v-footer :absolute="!fixed" app>
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-footer> -->
      <!-- footer current year end -->
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      // array for Navigation drawer list start
      items: [
        {
          icon: "mdi-home",
          title: "Home",
          to: "/home"
        },
        {
          icon: "mdi-account",
          title: "About",
          to: "/about"
        },
        {
          icon: "mdi-account",
          title: "Services",
          to: "/services"
        },
        {
          icon: "mdi-account",
          title: "Contact",
          to: "/contact"
        }
      ], // array for Navigation drawer list end
      // array for vertical dot start
      subMenu: [
        { icon: "mdi-account", title: "profile", to: "/trainee/setting" },
        { icon: "mdi-cog-outline", title: "Setting", to: "/trainee/profile" },
        { icon: "mdi-logout", title: "LogOut" }
      ], // array for vertical dot end
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "PROFILE"
    };
  }
};
</script>

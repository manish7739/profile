<template>
  <div>
    <div>
      <span class="display-1 ml-10 mt-16"><u>About Me</u></span>
      <p class="mt-10 title ml-10">
        I'm Manish Kumar and
        <a class="text-decoration">Web Developer</a>
      </p>
    </div>
    <div class="ml-10 text-justify text-right">
      Hi! My name is Manish Kumar. I'm a Web Developer, and I'm very passionate
      and delicated to my work, with 1 year experience as a professional Web
      Developer, I have acquired to skills and knowladge necessary to make your
      project a success, I enjoy very step to the design process , from
      discussion and collaboration.
    </div>
    <v-row>
      <v-col
        cols="12"
        md="4"
        sm="4"
        v-for="(item, index) in information"
        :key="index"
      >
        <v-simple-table class="mt-16 ml-10">
          <tbody>
            <tr v-for="(item1, i) in item.info" :key="i">
              <td>{{ item1.name }}</td>
              <td class="text-right">{{ item1.data }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>
      <v-col
        cols="12"
        sm="5"
        md="5"
        v-for="(item, index) in information"
        :key="index"
      >
        <v-simple-table class="mt-16 ">
          <tbody>
            <tr v-for="(item1, i) in info1" :key="i">
              <td>{{ item1.name }}</td>
              <td class="text-right">{{ item1.data }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>
      <v-col cols="12" sm="3" md="3">
        <v-simple-table class="mt-16">
          <tbody>
            <tr v-for="(knows, i) in know" :key="i">
              <td>{{ knows.title }}</td>
              <td class="text-center">{{ knows.per }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>
    </v-row>
    <div class="ml-10 mt-10">
      <v-btn class="amber darken-4" rounded href="/resume.pdf" target="_blank"
        >Download CV</v-btn
      >
      <v-btn class="amber darken-4 ml-5" rounded to="/contact"> Hire me</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      information: [
        {
          info: [
            {
              name: "Name",
              data: "Manish Kumar"
            },
            {
              name: "Degree",
              data: "B.Tech(CSE)"
            },
            {
              name: "City",
              data: "Dehradun"
            }
          ]
        }
      ],
      info1: [
        { name: "Date of Birth", data: "7 march 1998" },
        { name: "Email", data: "manishkumar12118@gmail.com" },
        { name: "Mobile number", data: "7739251434" }
      ],
      know: [
        { title: "javaScript", per: "75%" },
        { title: "html", per: "90%" },
        { title: "css", per: "80%" },
        { title: "Vue", per: "70%" },
        { title: "java", per: "55%" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>

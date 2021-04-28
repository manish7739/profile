<template>
  <div>
    <p class="mt-10 ml-10 display-1"><u>Contact Me</u></p>

    <v-row class="mt-16">
      <v-col cols="12" sm="4" md="4">
        <v-icon class="ml-16" size="50">mdi-phone</v-icon>
        <div class="ml-10">
          <h4 class="ml-7 mt-4">Call Us On</h4>

          <p>+91-7739251434</p>
        </div>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-icon class="ml-16" size="50">mdi-email</v-icon>
        <div>
          <h4 class="ml-16 mt-4">E-mail</h4>
          <span>manishkumar12118@gnail.com</span>
        </div>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-icon class="ml-16" size="50">mdi-linkedin</v-icon>
        <div>
          <h4 class="ml-16 mt-4">LinkedIn</h4>
          <p>manishkumar12118@gnail.com</p>
        </div>
      </v-col>
    </v-row>
    <div class="mx-16 mt-16">
      <v-row>
        <v-col>
          <v-text-field
            label="Name"
            v-model="name"
            prepend-inner-icon="mdi-account"
            persistent-hint
            outlined
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            label="Email"
            v-model="email"
            prepend-inner-icon="mdi-email"
            persistent-hint
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-text-field
        label="Subject"
        v-model="subject"
        prepend-inner-icon="mdi-text-subject"
        persistent-hint
        outlined
      ></v-text-field>
      <!-- <v-textarea
        color="black"
        v-model="description"
        label="description"
      ></v-textarea> -->
      <v-textarea
        outlined
        v-model="description"
        name="input-7-4"
        label="Message"
      ></v-textarea>
      <v-btn rounded class="red" @click="contactme()">Send Messsage</v-btn>

      <v-btn rounded class="red " to="/chat"> Chat</v-btn>
    </div>
  </div>
</template>

<script>
import contact from "~/actions/contact";
export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      description: ""
    };
  },
  methods: {
    async contactme() {
      let data = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        description: this.description
      };
      console.log(data);
      contact.contact_us(data, (err, res) => {
        if (err) {
          console.log(err);
        } else {
          this.$router.push("/contact");
          //       }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>

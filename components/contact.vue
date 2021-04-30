<template>
  <div>
    <p class="mt-10 ml-10 display-1"><u>Contact Me</u></p>

    <v-row class="mt-16">
      <v-col cols="12" sm="4" md="4">
        <v-avatar class="blue-grey lighten-3 ml-16" size="130">
          <v-icon size="50">mdi-phone</v-icon>
        </v-avatar>

        <div class="ml-16">
          <h3 class="ml-7 mt-4"><b>Call Us On</b></h3>

          <p>+91-7739251434</p>
        </div>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-avatar class="blue-grey lighten-3" size="130">
          <v-icon size="50">mdi-email</v-icon>
        </v-avatar>

        <div>
          <h3 class="ml-10 mt-4"><b>E-mail</b></h3>
          <p class="ml-n8">manishkumar12118@gnail.com</p>
        </div>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-avatar class="blue-grey lighten-3" size="130">
          <v-icon class="" size="50">mdi-linkedin</v-icon>
        </v-avatar>
        <div>
          <h3 class=" ml-10 mt-4">LinkedIn</h3>
          <p class="ml-n5">manish-kumar-2078101abs</p>
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
      <v-row>
        <v-col
          ><v-text-field
            label="Mobile Number"
            v-model="phone"
            prepend-inner-icon="mdi-phone"
            persistent-hint
            outlined
          ></v-text-field
        ></v-col>
        <v-col
          ><v-text-field
            label="Subject"
            v-model="subject"
            prepend-inner-icon="mdi-text-subject"
            persistent-hint
            outlined
          ></v-text-field
        ></v-col>
      </v-row>
      <!-- <v-textarea
        color="black"
        v-model="message"
        label="description"
      ></v-textarea> -->
      <v-textarea
        outlined
        v-model="message"
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
      phone: "",
      subject: "",
      message: ""
    };
  },
  methods: {
    async contactme() {
      let data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        subject: this.subject,
        message: this.message
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

<style scoped>
.rounded-card {
  border-radius: 150px;
}
</style>

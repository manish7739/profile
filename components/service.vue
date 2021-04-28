<template>
  <div>
    <v-card>
      <v-card-title class="justify-center display-1">
        ALL RECORDS
      </v-card-title>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left title">
                Name
              </th>
              <th class="text-left title">
                Email
              </th>
              <th class="text-left title">
                Subject
              </th>
              <th class="text-left title">
                Message
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in information" :key="i">
              <td>{{ item.name }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.subject }}</td>
              <td>{{ item.message }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Service",
  data() {
    return {
      information: "null"
    };
  },
  mounted() {
    this.getinformation();
  },
  methods: {
    async getinformation() {
      let information = await this.$axios.get(`${process.env.baseUrl}`);
      this.information = information.data.data;
      console.log(information.data.data);
    }
  }
};
</script>

<style lang="scss" scoped></style>

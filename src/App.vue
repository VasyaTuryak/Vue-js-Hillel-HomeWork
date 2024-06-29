<template>
  <el-container style="width: 100%">
    <div class="d-flex flex-column mb-3 w-100">
      <div>
        <el-form>
          <form @submit.prevent="onSubmit">
            <div>
              <h1>Create toDo</h1>
              <div class="d-flex flex-column mb-3">
                <div>
                  <el-form-item>
                    <el-input  placeholder="Title"  v-model="name"  size="large"/>
                    <p v-if="errors.name" class="text-danger">{{ errors.name }}</p>
                  </el-form-item>
                </div>
                <div>
                  <el-form-item>
                    <el-input
                        style="width: 100%"
                        :rows="2"
                        type="textarea"
                        placeholder="Please input task description"
                        v-model="description"
                    />
                    <p v-if="errors.description " class="text-danger">{{ errors.description }}</p>
                  </el-form-item>
                </div>
                <div>
                  <el-form-item>
                    <el-select
                        v-model="status"
                        placeholder="Select"
                        size="large"
                    >
                      <el-option
                          v-for="item in todoStatuses"
                          :key="item.id"
                          :label="item.title"
                          :value="item.value"
                      />
                    </el-select>
                    <p v-if="errors.status " class="text-danger">{{ errors.status }}</p>
                  </el-form-item>
                </div>
              </div>
            </div>
            <button type="submit">SAVE</button>
            <hr>
          </form>
        </el-form>
      </div>
    </div>
  </el-container>
  <div>
    <div v-if="toDoList.length>0">
      <h1>To do list</h1>
      <div class="container text-center">
        <div class="row row-cols-2">
          <div v-for="(x,index) in toDoList">
            <p>Created at: {{ index.substring(0, index.indexOf('GMT')) }}</p>
            <p>Name: {{ JSON.parse(x).name }}</p>
            <p>Description: {{ JSON.parse(x).description }}</p>
            <p>Status: {{ JSON.parse(x).status }}</p>
            <button @click="remove(index)">REMOVE</button>
            <hr>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as Yup from 'yup';
import {ElForm, ElFormItem, ElInput, ElSelect, ElOption, ElContainer} from "element-plus";
import {todoStatuses} from "./common/option.js";

export default {
  components: {
    ElForm, ElFormItem, ElInput, ElSelect, ElOption, ElContainer,
  },
  data() {
    return {
      name: '',
      description: '',
      status: '',
      errors: {},
      validationSchema: Yup.object().shape({
        name: Yup.string().required('Name is required').max(20,'Title has be no longer than 20 characters'),
        description: Yup.string().required('Description is required'),
        status: Yup.string().required('Status is required'),
      }),
      toDoList: localStorage
    };
  },
  computed: {
    todoStatuses() {
      return todoStatuses;
    }
  },
  methods: {
    async onSubmit() {
      try {
        let toDo = {
          name: this.name,
          description: this.description,
          status: this.status
        }
        // localStorage.clear();
        // Validate the form using the validationSchema
        await this.validationSchema.validate({
          name: this.name,
          description: this.description,
          status: this.status
        }, {abortEarly: false});

        localStorage.setItem(new Date().toString(), JSON.stringify(toDo))

        this.name = ''
        this.description = ''
        this.status = ''
        this.toDoList={}
        this.toDoList=localStorage
        this.errors = {}
      } catch (validationErrors) {
        // Format the validation errors
        const formattedErrors = {};
        validationErrors.inner.forEach(error => {
          formattedErrors[error.path] = error.message;
        });
        this.errors = formattedErrors;
      }
    },
    remove(x) {
      localStorage.removeItem(x);
      this.toDoList={}
      this.toDoList = localStorage
    }
  },
};
</script>

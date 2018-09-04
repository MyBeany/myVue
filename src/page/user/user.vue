<template>
  <div>
    <div style="border-radius: 5px;padding: 5px;">
      <el-table
        :data="userData"
        stripe
        style="width: 100%">
        <el-table-column
          align="center"
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          align="center"
          prop="sex"
          :formatter	="sexFilterFun"
          label="性别">
        </el-table-column>
        <el-table-column
          align="center"
          prop="age"
          label="年龄">
        </el-table-column>
        <el-table-column
          align="center"
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column
          align="center"
          label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small">详情</el-button>
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small" style="color: #f56c6c">禁用</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        userData: [
          {name: "张三", sex: 0, age: 23, address: "辽宁大连中山"},
          {name: "李四", sex: 0, age: 23, address: "辽宁大连中山"},
          {name: "王五", sex: 0, age: 23, address: "辽宁大连中山"}
        ]
      }
    },
    created: function () {
    },
    methods: {
      sexFilterFun(row, column, cellValue, index){
       return cellValue == 0 ? '男':'女';
      }
    }
  }
</script>

<style scoped>
</style>

<template>
  <div class="pagination-bar">
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="curPage"
      :page-sizes="[10,20,50]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalRows"
    ></el-pagination>
    <!-- <pagination
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
      :rows="rows"
      :total-rows="totalRows"
      :table-fresh="tableFresh"
    ></pagination> -->
      <!-- handleSizeChange: function(size) {
      this.page = 1
      this.rows = size
      this.loadData()
    },
    handleCurrentChange: function(p) {
      const me = this
      //console.log(me.page,me.curPage,p)
      if (me.page == p) {
        return
      }
      me.page = p
      me.loadData()
    } -->
  </div>
</template>

<style>
</style>

<script>
export default {
  name: 'pagination',
  props: ['totalRows', 'rows', 'tableFresh'],
  data () {
    return {
      curPage: 1,
      pageSize: 10
    }
  },
  watch: {
    tableFresh (val) {
      if (val) {
        this.curPage = 1
      }
    }
  },
  created () {},
  mounted () {
    this.pageSize = this.rows
  },
  methods: {
    handleSizeChange: function (size) {
      localStorage.pageSize = size
      this.$emit('handleSizeChange', size)
    },
    handleCurrentChange: function (p) {
      this.$emit('handleCurrentChange', p)
    }
  }
}
</script>

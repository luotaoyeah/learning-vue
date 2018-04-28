<template>
  <div>
    <ul>
      <li>表达式类型：Array | Object | number | string</li>
      <li>
        描述：
        循环渲染元素；
        <ul>
          <li>
            循环数据支持四种类型；
            <ul>
              <li>
                number：
                <ElTag
                  v-for="n in items01"
                  :key="n"
                >{{n}}
                </ElTag>
              </li>
              <li>
                string：
                <ElTag
                  v-for="n in items02"
                  :key="n"
                >{{n}}
                </ElTag>
              </li>
              <li>
                Array：
                <ElTag
                  v-for="n in items03"
                  :key="n"
                >{{n}}
                </ElTag>
              </li>
              <li>
                Object：
                <ElTag
                  v-for="n in items04"
                  :key="n"
                >{{n}}
                </ElTag>
              </li>
            </ul>
          </li>
          <li>
            可以获取循环索引（Array，number，string）和属性名称（Object）；
            如果是 Object，
            可以同时获取 key 和 index；
            <ul>
              <li>
                <ElTag
                  v-for="(n, index) in items03"
                  :key="n"
                >{{index}}: {{n}}
                </ElTag>
              </li>
              <li>
                <ElTag
                  v-for="(n, key, index) in items04"
                  :key="n"
                >key: {{key}}, index: {{index}}, value: {{n}}
                </ElTag>
              </li>
            </ul>
          </li>
          <li>
            可以使用 of 运算符；
            <ul>
              <li>
                <ElTag
                  v-for="(n, index) of items03"
                  :key="n"
                >{{index}}: {{n}}
                </ElTag>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items01: 3,
      items02: "123",
      items03: [1, 2, 3],
      items04: {
        x: 1,
        y: 2,
        z: 3
      }
    };
  },
  components: {}
};
</script>
<style scoped>
.el-tag {
  margin: 0 3px 3px 0;
}
</style>

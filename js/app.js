var vm = new Vue({
    el:"#app",
    data:{

        newtodo:"",
        todos:[
            {id:1,desc:"敲代码",completed:false},
            {id:2,desc:"看视频",completed:false}
        ]
    },
    methods:{
        
        addtodo(){
            var n = this.todos.length+1
            var newtodo = {
                id:n,//new Date()
                desc:this.newtodo,
                completed:false,
            }
            this.todos.push(newtodo)
            this.newtodo ="";
        },
        // enterclick(){
        //     alert("enter键抬起了")
        // } 

        del(item){
             //根据id删除数据
            //使用findindex()方法找到要删除的那一项的索引
            // var index = this.todos.findIndex(item=>{
            //     if(item.id==id){
                    
            //         return true//返回true终止findIndex循环
            //     }
            // })
            // this.todos.splice(index,1)

            var index = this.todos.indexOf(item)
            //console.log(index);
            this.todos.splice(index,1)
        },

        //清空数组的内容
        clearArray(){
            //this.todos.splice(0,this.todos.length)
            //this.todos.length=0;
            this.todos=[]
            // alert("清空数组")
        },

        //点击按键 下面的选择框全部被选中
        toggleAllCheck() {
            console.log(this.toggleAll)//结果为true或false
            //循环TODO数组 让todo中的每一项completed变为toggleAll
            this.todos.forEach((item,index) => {
                item.completed=this.toggleAll
            });
        }
       

    }
})
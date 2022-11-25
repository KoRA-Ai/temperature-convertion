var app = new Vue({
    el:'.app',
    data:{
        
            ctemp:0,
            newf:32
            
    },
    computed:{
        ftemp:{
            get(){
                return this.ctemp *9/5+32;
            },
            set(){
                ftemp=32
            }
        }
        ,
        newC:{
            get(){
                return (this.newf-32)*5/9;
            },
            set(){
                newC=0
            }
        }
    }


})


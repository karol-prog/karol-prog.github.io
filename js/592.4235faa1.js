"use strict";(self["webpackChunkshopping_list_2"]=self["webpackChunkshopping_list_2"]||[]).push([[592],{2592:function(t,s,i){i.r(s),i.d(s,{default:function(){return $}});var n=i(6768);const e={class:"container-content"};function o(t,s,i,o,p,a){const l=(0,n.g2)("aShoppingListsHeader"),r=(0,n.g2)("aShoppingListsContent");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(l),(0,n.Lk)("div",e,[(0,n.bF)(r)])],64)}const p=t=>((0,n.Qi)("data-v-02604816"),t=t(),(0,n.jt)(),t),a=p((()=>(0,n.Lk)("h1",null,"Shopping list 2",-1))),l=[a];function r(t,s){return(0,n.uX)(),(0,n.CE)("header",null,l)}var d=i(1241);const h={},u=(0,d.A)(h,[["render",r],["__scopeId","data-v-02604816"]]);var c=u,L=i(5130),g=i(4232);const v=t=>((0,n.Qi)("data-v-5a719e28"),t=t(),(0,n.jt)(),t),k={class:"shopping-list-data"},w=v((()=>(0,n.Lk)("h2",null,"Your Shopping List",-1))),m={key:0},C=v((()=>(0,n.Lk)("div",{class:"lds-dual-ring"},null,-1))),E=[C],f={key:1},y=["href","onClick"],_=["onClick"],S={class:"list-item"},X={class:"value-units"};function b(t,s,i,e,o,p){return(0,n.uX)(),(0,n.CE)("div",k,[w,(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>o.newListTitle=t),onKeydown:s[1]||(s[1]=(0,L.jR)(((...t)=>p.addNewList&&p.addNewList(...t)),["enter"])),type:"text",placeholder:"Enter new list"},null,544),[[L.Jo,o.newListTitle]]),o.shoppingLists?o.shoppingLists.error?((0,n.uX)(),(0,n.CE)("div",f,[(0,n.Lk)("p",null,"Error while loading data: "+(0,g.v_)(o.shoppingLists.error),1)])):((0,n.uX)(!0),(0,n.CE)(n.FK,{key:2},(0,n.pI)(o.shoppingLists,(t=>((0,n.uX)(),(0,n.CE)("div",{key:t.id,class:"shopping-list-data-lists"},[(0,n.Lk)("a",{href:`/shopping-lists/${t.id}`,onClick:(0,L.D$)((s=>p.openShoppingListDetail(t)),["prevent"])},(0,g.v_)(t.title),9,y),(0,n.Lk)("button",{onClick:s=>p.removeList(t.id)},"Remove",8,_),(0,n.Lk)("div",S,[(0,n.Lk)("ul",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(t.items.slice(0,3),(t=>((0,n.uX)(),(0,n.CE)("li",{key:t.id,class:"shopping-list-data-items"},[(0,n.Lk)("p",null,(0,g.v_)(t.name),1),(0,n.Lk)("div",X,[(0,n.Lk)("p",null,(0,g.v_)(t.value),1),(0,n.Lk)("p",null,(0,g.v_)(t.unit),1)])])))),128))])])])))),128)):((0,n.uX)(),(0,n.CE)("div",m,E))])}i(4114);var A=i(8355),T={data(){return{shoppingLists:null,newListTitle:""}},async mounted(){try{const{data:{data:t}}=await A.A.get("https://shoppinglist.wezeo.dev/cms/api/v1/shopping-lists");this.shoppingLists=t}catch(t){console.error("Error",t),this.shoppingLists={err:t}}},methods:{async removeList(t){try{const s=await A.A.delete(`https://shoppinglist.wezeo.dev/cms/api/v1/shopping-lists/${t}`);let i=s.data.data;this.shoppingLists=this.shoppingLists.filter((t=>t.id!==i.id))}catch(s){console.error("Error:",s)}},async addNewList(){try{if(!this.newListTitle.trim().length)return;{const t=await A.A.post("https://shoppinglist.wezeo.dev/cms/api/v1/shopping-lists",{title:this.newListTitle.trim(),items:[]}),s=t.data.data;this.shoppingLists.unshift(s),this.newListTitle=""}}catch(t){console.log("Error:",t)}},openShoppingListDetail({id:t}){this.$router.push({name:"Shopping List - Detail",params:{id:t}})}}};const F=(0,d.A)(T,[["render",b],["__scopeId","data-v-5a719e28"]]);var D=F,I={components:{aShoppingListsHeader:c,aShoppingListsContent:D}};const K=(0,d.A)(I,[["render",o]]);var $=K}}]);
//# sourceMappingURL=592.4235faa1.js.map
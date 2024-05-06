import { Text, TextInput, View, TouchableOpacity, FlatList, Image } from 'react-native';
import {IconButton} from "react-native-paper";


const dummydata = [{
  id: "01", 
  title: "Wash Jet",
},
{ 
  id: "02", 
  title: "Meet with Imran",
},
]

const TodoScreen = () => {

  const renderTodo = ({item, index}) =>{
    return(
      <View style={{backgroundColor: "#1e90ff", borderRadius: 6, paddingVertical: 10, marginVertical: 20}}>
      <IconButton icon="pencil"/>
      <IconButton icon = "trash-can"/>
      <Text style={{color:"#fff", fontSize: 20, fontWeight: 400}}> {item.title}</Text>
      </View>
    );
  };

  return (
    <View style ={{marginHorizontal: 16}}>
      <TextInput style={{borderWidth:2, borderColor: "#1e90ff", borderRadius: 6, paddingVertical: 12, paddingHorizontal: 16}} placeholder="Add Task"/>

    <TouchableOpacity style={{backgroundColor:"#000", borderRadius: 6, paddingVertical:8, marginTop: 20, alignItems: "center"}}>
    <Text style={{color:"#fff", fontWeight: "bold", fontSize: 17}}>Add</Text>
    </TouchableOpacity>

    <FlatList data={dummydata} renderItem={renderTodo}/>
    </View>
  );
};

export default TodoScreen;

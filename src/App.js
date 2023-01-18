import "./App.css";
import { useAddUserMutation, useGetUsersQuery } from "./redux/userApi";

function App() {
  const { data = [], isLoading } = useGetUsersQuery();
  const [addUser, { isError }] = useAddUserMutation();

  const handlerAdduser = async () => {
    await addUser({ username: "New", password: "123" }).unwrap();
  };

  if (isLoading) return <h1>LOADING ...</h1>;

  return (
    <div className="App">
      <button onClick={handlerAdduser}></button>
      {data && data.map((item) => <div key={item.id}> {item.username} </div>)}
    </div>
  );
}

export default App;

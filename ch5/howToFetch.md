Fetch Async
```
const fetchData = async () => {
    const response = await fetch(DETAIL_URL);
    const responseJson = await response.json();
    setContentData(responseJson);
 };
 fetchData();
```
Fetch Sync
```
fetch(DETAIL_URL)
    .then((response) => {
        return response.json();
    })
    .then((responseJson) => {
        setContentData(responseJson);
    });
```
Axios Async
```
const fetchData = async () => {
    const response = await axios.get(DETAIL_URL);
    setContentData(response.data);
};
fetchData();
```
Axios Sync
```
axios.get(DETAIL_URL).then((response) => {
    setContentData(response.data);
});
```

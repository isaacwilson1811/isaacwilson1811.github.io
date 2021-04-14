export class API{
    static async fetchCourses(){
        const callAPI = await fetch('https://golf-courses-api.herokuapp.com/courses',
        {method: 'GET' , headers: {ContentType: 'application/json'}});
        const json = await callAPI.json();
        const data = await json;
        return data.courses;
    }
    static async fetchTeeBoxes(id){
        const callAPI = await fetch('https://golf-courses-api.herokuapp.com/courses/'+id);
        const json = await callAPI.json();
        const data = await json;
        return (data.data.holes[0].teeBoxes);
    }
    static async fetchGame(id){
        const callAPI = await fetch('https://golf-courses-api.herokuapp.com/courses/'+id);
        const json = await callAPI.json();
        const data = await json;
        return (data.data);
    }
}
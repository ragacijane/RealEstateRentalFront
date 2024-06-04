import { ref } from "vue";

const getAllProperties = () => {
  const properties = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:8081/ownersandproperties");
      if (!data.ok) {
        throw Error("no data available");
      }
      properties.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { properties, error, load };
};
export default getAllProperties;

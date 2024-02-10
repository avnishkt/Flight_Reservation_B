
class CrudService{
    constructor(repository) {
        this.repository= repository;
    }
    async create(data){
        try {
            console.log(2)
            const response = await this.repository.create(data);
            return response;
        } catch (error) {
          console.log("something gone rong in crud service");
          throw error; 
        }

    }
    async destroy(){
        try {
            const response = await this.repository.destroy(id);
            return response;   
        } catch (error) {
          console.log("something gone rong in crud service");
          throw error; 
        }
    }
    async get(id){
        try {
            const response = await this.repository.get(id);
            return response;  
        } catch (error) {
          console.log("something gone rong in crud service");
          throw error; 
        }
    }
    async getAll(){
        try {
            const response = await this.repository.getAll(id);
            return response;  
        } catch (error) {
          console.log("something gone rong in crud service");
          throw error; 
        }
    }
    async update(id,data){
        try {
            const response = await this.repository.update(id,data);
            return response;  
        } catch (error) {
          console.log("something gone rong in crud service");
          throw error; 
        }
    }
 }
 module.exports=CrudService;
import Proj from '../Model/Project.js';



export const getProject = async (request, response) => {
    try{
        const project = await Proj.find();
        response.status(200).json(project);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}


export const addProject = async (request, response) => {
    const project = request.body;
    
    const newProject = new Proj(project);
    try{
        await newProject.save();
        response.status(201).json(newProject);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}


export const getProjectById = async (request, response) => {
    try{
        const project = await Proj.findById(request.params.id);
        response.status(200).json(project);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}


export const updateProject = async (request, response) => {
    let project = request.body;

    const editProject = new Proj(project);
    try{
        await Proj.updateOne({_id: request.params.id}, editProject);
        response.status(201).json(editProject);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

export const deleteProject = async (request, response) => {
    try{
        await Proj.deleteOne({_id: request.params.id});
        response.status(201).json("Project deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}
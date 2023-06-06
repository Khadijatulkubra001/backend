import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const projSchema = mongoose.Schema({
    name: String,
    description: String,
    manager: String
});

autoIncrement.initialize(mongoose.connection);
projSchema.plugin(autoIncrement.plugin, 'project');

const Proj = mongoose.model('project', projSchema);

export default Proj;

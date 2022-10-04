// import { DataTypes, Model, Optional } from 'sequelize';
// import sequelizeConnection from "../db";
// import blockbuster from './blockbuster.model'
// import comments from './coments.model'

// interface MoviesComentsAttributes {
//     id ?: number;
//     blockbusterId? : number;
//     comentsId? : number;
//     createdAt ?: Date;
//     updatedAt ?: Date;
//     deletedAt ?: Date;
// }

// export interface MoviesComentsInput extends Optional<MoviesComentsAttributes, 'id'>{}

// export interface MoviesComentsOutput extends MoviesComentsInput{}

// class MoviesComents extends Model<MoviesComentsAttributes, MoviesComentsInput> implements MoviesComentsAttributes {
//     public id!: number;
//     public blockbusterId!: number;
//     public comentsId!: number;

//     // timestamps!
//     public readonly createdAt!: Date;
//     public readonly updatedAt!: Date;
//     public readonly deletedAt!: Date;
// }

// MoviesComents.init({
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//     },
//     blockbusterId: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: blockbuster,
//             key: 'id'
//         }
//     },
//     comentsId: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: comments,
//             key: 'id'
//         }
//     }
// }, {
//     sequelize: sequelizeConnection
// })


// export default MoviesComents;

import type { Request, Response } from "express";
import { pool } from "../conf/dbConnection.ts";
import type { ResultSetHeader, RowDataPacket } from "mysql2";

export class ProductsController {
  constructor() {}

  async getAll(_req:Request, res:Response){
    try {
      const [products] = await pool.execute<RowDataPacket[]>(
        "select id, name, price, stock, description, img from products",
      );
      res.json(products);
    } catch {
      res.status(500).json({ message: "internal server error" });
    }
  }

  async getById(req:Request, res:Response){
    try {
      const id = Number(req.params.id);
      const [users] = await pool.execute<RowDataPacket[]>(
        "select id, name, last_name, age, email, role from users where id = ?",
        [id],
      );
      if (!users[0]) {
        res.status(404).json({ message: "user not found" });
        return;
      }
      res.json(users);
    } catch {
      res.status(500).json({ message: "internal server error" });
    }
  }
  
  async create(req:Request, res:Response){
    try {
      const { name, lastName, age, email, role, password } = req.body;
      await pool.execute(
        "insert into users (name, last_name, age, email, role, password) values (?, ?, ?, ?, ?, ?)",
        [name, lastName, age, email, role, password],
      );
      res.status(201).json({ message: "user created" });
    } catch {
      res.status(500).json({ message: "internal server error" });
    }
  }

  async update(req:Request, res:Response){
    try {
      const id = Number(req.params.id);
      const { name, lastName, age, email, role, password } = req.body;
      const [result] = await pool.execute<ResultSetHeader>(
        "update users set name = ?, last_name = ?, age = ?, email = ?, role = ?, password = ? where id = ?",
        [name, lastName, age, email, role, password, id],
      );
      if (result.affectedRows === 0) {
        res.status(404).json({ message: "user not found" });
        return;
      }
      res.status(200).json({ message: "user updated" });
    } catch {
      res.status(500).json({ message: "internal server error" });
    }
  }

  delete(_req:Request, res:Response){
    res.json({message:"funciona"})
  }

  changePrice(_req:Request, res:Response){
    res.json({message:"funciona"})
  }
}
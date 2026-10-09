import type { Request, Response } from "express";
import { pool } from "../conf/dbConnection.ts";
import type { ResultSetHeader, RowDataPacket } from "mysql2";

export class ProductsController {
  constructor() {}

  async getAll(_req:Request, res:Response){
    try {
      const [products] = await pool.execute<RowDataPacket[]>(
        "select id, name, price, stock, description, brand, img, active from products where active = TRUE",
      );
      res.json(products);
    } catch {
      res.status(500).json({ message: "internal server error" });
    }
  }

  async getById(req:Request, res:Response){
    try {
      const id = Number(req.params.id);

      if (!Number.isInteger(id) || id <=0){
        res.status(400).json({ message: "invalid id"});
        return;
      }

      const [products] = await pool.execute<RowDataPacket[]>(
        "select id, name, price, stock, description, brand, img, active from products where id = ? and active =TRUE",
        [id],
      );
      if (!products[0]) {
        res.status(404).json({ message: "product not found" });
        return;
      }
      res.json(products);
    } catch {
      res.status(500).json({ message: "internal server error" });
    }
  }
  
  async create(req:Request, res:Response){
    try {
      const { name, price, stock, description, brand, img } = req.body;

      const priceNumber = Number(price);
      if(price === "" || priceNumber <=0 || price == null || !Number.isFinite(priceNumber)){
        res.status(400).json({ message: "Price cant be 0 or less" });
        return;
      }

      const [result] = await pool.execute<ResultSetHeader>(
        "insert into products (name, price, stock, description, brand, img) values (?, ?, ?, ?, ?, ?)",
        [name, priceNumber, stock, description, brand ?? null, img ?? null],
      );

      res.status(201).json({ message: "product created", id: result.insertId});
    } catch {
      res.status(500).json({ message: "internal server error" });
    }
  }

  async update(req:Request, res:Response){
    try {
      const id = Number(req.params.id);
      const { name, price, stock, description, brand, img } = req.body;
      if(!Number.isInteger(id) || id<=0){
        res.status(400).json({ message: "Invalid id" });
        return;
      }

      const priceNumber = Number(price);
      if(price === "" || priceNumber <=0 || price == null || !Number.isFinite(priceNumber)){
        res.status(400).json({ message: "Price cant be 0 or less" });
        return;
      }

      const [result] = await pool.execute<ResultSetHeader>(
        "update products set name = ?, price = ?, stock = ?, description = ?, brand = ?, img = ? where id = ? and active = TRUE",
        [name, priceNumber, stock, description, brand ?? null, img ?? null, id],
      );
      if (result.affectedRows === 0) {
        res.status(404).json({ message: "product not found" });
        return;
      }
      res.status(200).json({ message: "product updated" });
    } catch {
      res.status(500).json({ message: "internal server error" });
    }
  }

  async delete(req:Request, res:Response){
    try{
      const id = Number(req.params.id);
      if(!Number.isInteger(id) || id<=0){
        res.status(400).json({ message: "Invalid id" });
        return;
      }
      const [result] = await pool.execute<ResultSetHeader>(
        "update products set active = FALSE where id = ? and active = TRUE",
        [id],
      );
      if (result.affectedRows === 0) {
        res.status(404).json({ message: "product not found" });
        return;
      }
      res.status(200).json({ message: "product deleted" });
    }catch {
      res.status(500).json({ message: "internal server error" });
    }   
  }

  async changePrice(req:Request, res:Response){
    try{
      const id = Number(req.params.id);
      if(!Number.isInteger(id) || id<=0){
        res.status(400).json({ message: "Invalid id" });
        return;
      }
      const { price } = req.body;

      const priceNumber = Number(price);
      if(price === "" || priceNumber <=0 || price == null || !Number.isFinite(priceNumber)){
        res.status(400).json({ message: "Price cant be 0 or less" });
        return;
      }

      const [result] = await pool.execute<ResultSetHeader>(
        "update products set price = ? where id = ? and active = TRUE",
        [priceNumber, id],
      );

      if (result.affectedRows === 0) {
        res.status(404).json({ message: "product not found" });
        return;
      }
     res.status(200).json({ message: "price updated" });
    } catch {
      res.status(500).json({ message: "internal server error" });
    }
  }
}
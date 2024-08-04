import { Injectable } from '@angular/core';
import { SanPhamModel } from '../models/sanpham.model';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor() {}

  danhSachSanPham: SanPhamModel[] = [
    {
      id: '1',
      ten: 'Product 1',
      gia: 100,
      hinh: 'image1.jpg',
      moTa: 'Description 1',
      soLuong: 10,
    },
    {
      id: '2',
      ten: 'Product 2',
      gia: 200,
      hinh: 'image2.jpg',
      moTa: 'Description 2',
      soLuong: 20,
    },
    {
      id: '3',
      ten: 'Product 3',
      gia: 300,
      hinh: 'image3.jpg',
      moTa: 'Description 3',
      soLuong: 30,
    },
  ];

  gioHang: SanPhamModel[] = [];
  tongTien: number = 0;

  themSanPham(sanPham: SanPhamModel) {
    this.danhSachSanPham.push(sanPham);
  }

  xoaSanPham(index: number) {
    this.danhSachSanPham.splice(index, 1);
  }

  thanhToan() {
    this.tongTien = 0;
    this.gioHang.forEach((sp) => {
      this.tongTien += sp.gia * sp.soLuong;
    });
    this.gioHang = [];
  }
}

class Cube{
    constructor(){
        this.type = 'cube';
        //this.position = [.0, 0.0, 0.0];
        this.color = [1.0, 1.0, 1.0, 1.0]; // Default color is white
        //this.size = 5.0;
        //this.segments = 10;
        this.matrix = new Matrix4();
        this.textureNum = 0;
    }

    render(){
        //var xy = this.position;
        var rgba = this.color;
        //var size = this.size;

        gl.uniform1i(u_whichTexture, this.textureNum);

        //pass the color of a point to u_FragColor variable
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

        //pass the matrix to u_ModelMatrix attribute
        gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);

        //       y
        //       ↑
        // |
        // |      D__________C
        // |     /|         /|
        // |    / |        / |
        // |   H__|_______G  |
        // |   |  |       |  |
        // |   |  A_______|__B   → x
        // |   | /        | /
        // |   |/         |/
        // |   E__________F

        //A(0,0,0) B(1,0,0) C(1,1,0) D(0,1,0)
        //E(0,0,1) F(1,0,1) G(1,1,1) H(0,1,1)

 
// FRONT  (+Z) ───────────────────────────────
drawTriangle3DUVNormal(    
  [0,0,0,   1,1,0,   1,0,0],   // (L,D,F) (R,U,F) (R,D,F)
  [0,0,      1,1,     1,0],     //  u=x , v=y);
  [0,0,-1, 0,0,-1, 0,0,-1]);
  drawTriangle3DUVNormal(
    [0,0,0,   0,1,0,   1,1,0],   // (L,D,F) (L,U,F) (R,U,F)
    [0,0,      0,1,     1,1],
    [0,0,-1, 0,0,-1, 0,0,-1]
  );


//Top of cube
drawTriangle3DUVNormal(    
  [0,1,0,   0,1,1,   1,1,1],   // (L,D,F) (R,U,F) (R,D,F)
  [0,0,      1,1,     1,0],     //  u=x , v=y);
  [0,1,0, 0,1,0, 0,1,0]);
  drawTriangle3DUVNormal(
    [0,1,0,   1,1,1,   1,1,0],   // (L,D,F) (L,U,F) (R,U,F)
    [0,0,      0,1,     1,1],
    [0,1,0, 0,1,0, 0,1,0]
  );

//Right
drawTriangle3DUVNormal(    
    [1,1,0,   1,1,1,   1,0,0],   // (L,D,F) (R,U,F) (R,D,F)
    [0,0,      1,1,     1,0],     //  u=x , v=y);
    [1,0,0, 1,0,0, 1,0,0]);
  drawTriangle3DUVNormal(
    [1,0,0,   1,1,1,   1,0,1],   // (L,D,F) (L,U,F) (R,U,F)
    [0,0,      0,1,     1,1],
    [1,0,0, 1,0,0, 1,0,0]
  );

  //left
  drawTriangle3DUVNormal(    
    [0,1,0,   0,1,1,   0,0,0],   // (L,D,F) (R,U,F) (R,D,F)
    [0,0,      1,1,     1,0],     //  u=x , v=y);
    [-1,0,0, -1,0,0, -1,0,0]);
  drawTriangle3DUVNormal(
    [0,0,0,   0,1,1,   0,0,1],   // (L,D,F) (L,U,F) (R,U,F)
    [0,0,      0,1,     1,1],
    [-1,0,0, -1,0,0, -1,0,0]
  );
  //Bottom
  drawTriangle3DUVNormal(    
    [0,0,0,   0,0,1,   1,0,1],   // (L,D,F) (R,U,F) (R,D,F)
    [0,0,      1,1,     1,0] ,    //  u=x , v=y);
    [0,-1,0, 0,-1,0, 0,-1,0]);
      drawTriangle3DUVNormal(    
    [0,0,0,   1,0,1,   1,0,0],   // (L,D,F) (R,U,F) (R,D,F)
    [0,0,      1,1,     1,0],     //  u=x , v=y);
    [0,-1,0, 0,-1,0, 0,-1,0]);


    drawTriangle3DUVNormal(    
    [0,0,1,   1,1,1,   1,0,1],   // (L,D,F) (R,U,F) (R,D,F)
    [0,0,      1,1,     1,0],     //  u=x , v=y);
    [0,-1,0, 0,-1,0, 0,-1,0]);
      drawTriangle3DUVNormal(    
    [0,0,1,   0,1,1,   1,1,1],   // (L,D,F) (R,U,F) (R,D,F)
    [0,0,      1,1,     1,0],     //  u=x , v=y);
    [0,0,1, 0,0,1, 0,0,1]);

}



}
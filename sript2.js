/**@type {HTMLAnchorElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH=canvas.width=500;
const CANVAS_HEIGHT=canvas.height=1000;
  const numberOfEnemies=20;
//const numberOfEnemies2=10;
const enemiesArray=[];


 const seguirMause=document.getAnimations('canvas1');


 
  


let gameFrame=0;





class Enemy1{
    constructor(){

        this.image= new Image()
        this.image.src='./assets/enemy1.png';
        
        
        //this.speed =Math.random() * 4-2;
        this.spriteWidth= 293;
        this.spriteHeight=155;
        this.width=this.spriteWidth / 2.5;
        this.height=this.spriteHeight / 2.5;
        this.x=Math.random()* (canvas.width-this.width);
        this.y=Math.random()* (canvas.height- this.width);


        this.frame =0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        }
        update(){
            this.x +=Math.random() * 5-2.5;
            this.y +=Math.random() * 5-2.5;
            //animate sprites
             if (gameFrame % this.flapSpeed ===0) {
                this.frame>4 ? this.frame= 0 : this.frame++;
             }
            }
        draw(){
            
            ctx.drawImage(this.image, this.frame*this.spriteWidth, 0,this.spriteWidth,this.spriteHeight, this.x, this.y, this.width, this.height);

        }

};

class Enemy1M{
    constructor(){

        this.image= new Image()
        this.image.src='./assets/enemy1M.png';
       
        
        //this.speed =Math.random() * 4-2;
        this.spriteWidth= 293;
        this.spriteHeight=155;
        this.width=this.spriteWidth / 2.5;
        this.height=this.spriteHeight / 2.5;
        this.x=Math.random()* (canvas.width-this.width);
        this.y=Math.random()* (canvas.height- this.width);
        this.medio=4;
        this.lado=1;
        

        
        
        


        this.frame =0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        }
        update(){
            

            this.x +=Math.random() * (this.medio+this.lado)-2.5;
            this.y +=Math.random() * 5-2.5;
            

            canvas.addEventListener("mousedown", (e)=> {
                

                
                this.lado=this.lado*(-1)
                if (this.lado==-1){this.lado=7}
                
                

                
                
                
                
            }); 

            
           



            if (this.x + canvas.height<0){this.x=canvas.width};
            if (this.x > canvas.height){this.x=-293};
            
            
            
            //animate sprites
             if (gameFrame % this.flapSpeed ===0) {
                this.frame>4 ? this.frame= 0 : this.frame++;
             }
            }
        draw(){
            
            ctx.drawImage(this.image, this.frame*this.spriteWidth, 0,this.spriteWidth,this.spriteHeight, this.x, this.y, this.width, this.height);

        }

};

class Enemy2{
    constructor(){

        this.image= new Image()
        this.image.src='./assets/enemy2.png';
      
        
        this.speed =Math.random() * 4+1;
        this.spriteWidth= 266;
        this.spriteHeight=188;
        this.width=this.spriteWidth / 2.5;
        this.height=this.spriteHeight / 2.5;
        this.x=Math.random()* (canvas.width-this.width);
        this.y=Math.random()* (canvas.height- this.width);
        this.frame =0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angle=/*Math.random() */ 0;
        this.angleSpeed =Math.random() *0.2;
        this.curve =Math.random()*7;


        }
        update(){
            this.x -=this.speed; 
            this.y += this.curve * Math.sin(this.angle) 
            this.angle +=this.angleSpeed;
            
        
            
            if(this.x + this.width<0) this.x=canvas.width;
          
            //animate sprites
             if (gameFrame % this.flapSpeed ===0) {
                this.frame>4 ? this.frame= 0 : this.frame++;
             }
            }
        draw(){
            
            ctx.drawImage(this.image, this.frame*this.spriteWidth, 0,this.spriteWidth,this.spriteHeight, this.x, this.y, this.width, this.height);

        }

};
 
class Enemy2M{
    constructor(){

        this.image= new Image()
        this.image.src='./assets/enemy2M.png';
      
        
        this.speed =Math.random() * 0.1+1;
        this.spriteWidth= 266;
        this.spriteHeight=188;
        this.width=this.spriteWidth / 2.5;
        this.height=this.spriteHeight / 2.5;
        this.x=Math.random()* (canvas.width-this.width);
        this.y=Math.random()* (canvas.height- this.width);
        this.frame =0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angle=/*Math.random() */ 0;
        this.angleSpeed =Math.random() *0.2;
        this.curve =Math.random()*7;
        this.interval =Math.floor(Math.random() *200 +50);
    }
        


        
        update(){
            this.x -=this.speed; 
            this.y += this.curve * Math.sin(this.angle) 
            this.angle +=this.angleSpeed;
            canvas.addEventListener("mousedown", (e) => {
                
                this.newX = e.offsetX;
                this.flapSpeed++;
               this.newY = e.offsetY;
               
               
               
           }); 
           if (this.x + this.width<0){this.flapSpeed = Math.floor(Math.random() * 3 + 1);
            
            
        }
           

            
            
        
            
            if(this.x + this.width<0) this.x=canvas.width;
          
            //animate sprites
             if (gameFrame % this.flapSpeed ===0) {
                this.frame>4 ? this.frame= 0 : this.frame++;
             }
            }
        draw(){
            
            ctx.drawImage(this.image, this.frame*this.spriteWidth, 0,this.spriteWidth,this.spriteHeight, this.x, this.y, this.width, this.height);

        }

};

class Enemy3{
    constructor(){

        this.image= new Image()
        this.image.src='./assets/enemy3.png';
      
        
        this.speed =Math.random() * 4+1;
        this.spriteWidth= 218;
        this.spriteHeight=177;
        this.width=this.spriteWidth / 2.5;
        this.height=this.spriteHeight / 2.5;
        this.x=Math.random()* (canvas.width-this.width);
        this.y=Math.random()* (canvas.height- this.width);
        this.frame =0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angle=Math.random()*50;
        this.angleSpeed =Math.random() *0.5 + 0.5;
        //this.curve =Math.random()*200 +50 ;
    }


        
        update(){
            this.x = canvas.width/2 * Math.sin(this.angle * Math.PI/90) + canvas.width/2-this.width/2; 
            this.y = canvas.height/2 * Math.cos(this.angle * Math.PI/270) + canvas.height/2-this.height/2; 
            this.angle +=this.angleSpeed;
            
        
            
            if(this.x + this.width<0) this.x=canvas.width;
          
            //animate sprites
             if (gameFrame % this.flapSpeed ===0) {
                this.frame>4 ? this.frame= 0 : this.frame++;
             }
            }
        draw(){
           
            ctx.drawImage(this.image, this.frame*this.spriteWidth, 0,this.spriteWidth,this.spriteHeight, this.x, this.y, this.width, this.height);

        }

};

class Enemy3M{
    constructor(){

        this.image= new Image()
        this.image.src='./assets/enemy3M.png';
      
        
        this.speed =Math.random() * 4+1;
        this.spriteWidth= 218;
        this.spriteHeight=177;
        this.width=this.spriteWidth / 2.5;
        this.height=this.spriteHeight / 2.5;
        this.x=Math.random()* (canvas.width-this.width);
        this.y=Math.random()* (canvas.height- this.width);
        this.frame = 2;
        this.onda=300;
        this.wave=300;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angle=Math.random()*0.3;
        this.angleSpeed =Math.random() *2 + 0.05;
        
        //this.curve =Math.random()*200 +50 ;
    }


        
        update(){
            if (gameFrame %this.interval ===0){
                this.newX=Math.random()* (canvas.width-this.width);
                this.newY=Math.random()* (canvas.height- this.width);
            }
            
            
           

            canvas.addEventListener("mousedown",  (e) => {
                
                
                this.onda = e.offsetX;
                this.wave = e.offsetY;
      
              }); 
              this.x = canvas.width/2 * Math.cos(this.angle * Math.PI/this.onda) + canvas.width/2-this.width/2; 
            this.y = canvas.height/2 * Math.sin(this.angle * Math.PI/ this.wave) + canvas.height/2-this.height/2; 
            this.angle +=this.angleSpeed;
              
              
           
        
            
            if(this.x + this.width<0) this.x=canvas.width;
          
            //animate sprites
             if (gameFrame % this.flapSpeed ===0) {
                this.frame>4 ? this.frame= 0 : this.frame++;
             }
            }
        draw(){
           
            ctx.drawImage(this.image, this.frame*this.spriteWidth, 0,this.spriteWidth,this.spriteHeight, this.x, this.y, this.width, this.height);

        }

};

class Enemy4{
    constructor(){

        this.image= new Image()
        this.image.src='./assets/enemy4.png';
      
        
        this.speed =Math.random() * 4+1;
        this.spriteWidth= 213;
        this.spriteHeight=213;
        this.width=this.spriteWidth / 2.5;
        this.height=this.spriteHeight / 2.5;
        this.x=Math.random()* (canvas.width-this.width);
        this.y=Math.random()* (canvas.height- this.width);
        this.frame =0;
        
        this.newX=Math.random()* canvas.width;
        this.newY=Math.random()* canvas.height;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.interval =Math.floor(Math.random() *200 +50);
      
    }


        
        update(){
            if (gameFrame %this.interval ===0){
                this.newX=Math.random()* (canvas.width-this.width);
                this.newY=Math.random()* (canvas.height- this.width);
            }
            let dx = this.x -this.newX;
            let dy = this.y -this.newY;
            this.x -=dx/70;
            this.y -=dy/70;      
            if(this.x + this.width<0) this.x=canvas.width;
          
            //animate sprites
             if (gameFrame % this.flapSpeed ===0) {
                this.frame>4 ? this.frame= 0 : this.frame++;
             }
            }
        draw(){
           
            ctx.drawImage(this.image, this.frame*this.spriteWidth, 0,this.spriteWidth,this.spriteHeight, this.x, this.y, this.width, this.height);

        }

};

class Enemy4M{
    constructor(){

        this.image= new Image()
        this.image.src='./assets/enemy4M.png';
      
        
        this.speed =Math.random() * 4+1;
        this.spriteWidth= 213;
        this.spriteHeight=213;
        this.width=this.spriteWidth / 2.5;
        this.height=this.spriteHeight / 2.5;
        this.x=Math.random()* (canvas.width-this.width);
        this.y=Math.random()* (canvas.height- this.width);
        this.frame =0;
        
        this.newX=Math.random()* canvas.width;
        this.newY=Math.random()* canvas.height;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.interval =Math.floor(Math.random() *200 +50);
      
    }


        
        update(){
            if (gameFrame %this.interval ===0){
                this.newX=Math.random()* (canvas.width-this.width);
                this.newY=Math.random()* (canvas.height- this.width);
            }
            canvas.addEventListener("mousemove", (e) => {
                
                this.newX = e.offsetX-2;
               this.newY = e.offsetY;
               
               
           }); 
            


            let dx = this.x -this.newX;
            let dy = this.y -this.newY;
            this.x -=dx/50 ;
            this.y -=dy/100; 
            
            
            
            if(this.x + this.width<0) this.x=canvas.width;
          
            //animate sprites
             if (gameFrame % this.flapSpeed ===0) {
                this.frame>4 ? this.frame= 0 : this.frame++;
             }
            }
        draw(){
           
            ctx.drawImage(this.image, this.frame*this.spriteWidth, 0,this.spriteWidth,this.spriteHeight, this.x, this.y, this.width, this.height);

        }

};










/*for (let i = 0 ; i < numberOfEnemies2;i++) {
    enemiesArray.push(new Enemy1M());
    
}*/


for (let i = 0 ; i < numberOfEnemies;i++) {
    enemiesArray.push(new Enemy1M(),new Enemy2()M,new Enemy3()M,new Enemy4()M);
    
}



function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  
    enemiesArray.forEach(enemy =>{
        enemy.update();
        enemy.draw();
    })
    gameFrame++;
    requestAnimationFrame(animate);
    
}
animate()



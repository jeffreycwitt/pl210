import React from "react";
import { FreeCamera, Vector3, HemisphericLight, MeshBuilder, ArcRotateCamera} from "@babylonjs/core";
import SceneComponent from "./SceneComponent"; // uses above component in same directory
// import SceneComponent from 'babylonjs-hook'; // if you install 'babylonjs-hook' NPM.

let box;

const onSceneReady = (scene) => {
  // This creates and positions a free camera (non-mesh)
  var camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

  // This targets the camera to scene origin
  camera.setTarget(Vector3.Zero());

  const canvas = scene.getEngine().getRenderingCanvas();

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  var light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.7;

  // Our built-in 'box' shape.
  box = MeshBuilder.CreateBox("box", { size: 2 }, scene);

  // Move the box upward 1/2 its height
  box.position.y = 1;

  // Our built-in 'ground' shape.
  MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
};

/**
 * Will run on every frame render.  We are spinning the box on y-axis.
 */
const onRender = (scene) => {
  if (box !== undefined) {
    var deltaTimeInMillis = scene.getEngine().getDeltaTime();

    const rpm = 10;
    box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
  }
};


const createScene = (scene) => {
  //const scene = new Scene(engine);

  const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 50, new Vector3(0, 0, 0), scene);
  //const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, true);
  //camera.attachControl(canvas, true);
  
  const canvas = scene.getEngine().getRenderingCanvas();
  //const light = new HemisphericLight("light", new Vector3(0, 1, 0));
  var light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 1;
  
  //MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);

  

const boxes = []
for (let i = 0; i < 10; i++) {
boxes.push(MeshBuilder.CreateBox("box" + i, {size: .5, width: .5, height: .5}));
boxes[i].position.y = (2 + i) - 7

}

// const spheres = []
// for (let i = 0; i < 10; i++) {
// spheres.push(MeshBuilder.CreateSphere("sphere" + i, {diameter: .5}));
// spheres[i].position.y = (1.5 + i) - 6
// }
// const spheres1 = []
// for (let i = 0; i < 10; i++) {
// spheres1.push(MeshBuilder.CreateSphere("sphere" + i, {diameter: .5}));
// spheres1[i].position.y = (1.5 + i) - 6
// spheres1[i].position.x = -.5
// }
// const spheres2 = []
// for (let i = 0; i < 10; i++) {
// spheres2.push(MeshBuilder.CreateSphere("sphere" + i, {diameter: .5}));
// spheres2[i].position.y = (1.5 + i) - 6
// spheres2[i].position.x = .5
// }
// const spheres3 = []
// for (let i = 0; i < 10; i++) {
// spheres3.push(MeshBuilder.CreateSphere("sphere" + i, {diameter: .5}));
// spheres3[i].position.y = (.5 + i) - 6
// spheres3[i].position.x = .5
// }
// const spheres4 = []
// for (let i = 0; i < 10; i++) {
// spheres4.push(MeshBuilder.CreateSphere("sphere" + i, {diameter: .5}));
// spheres4[i].position.y = (.5 + i) - 6
// spheres4[i].position.x = -.5
// }
// const spheres5 = []
// for (let i = 0; i < 10; i++) {
// spheres5.push(MeshBuilder.CreateSphere("sphere" + i, {diameter: .5}));
// spheres5[i].position.y = (1 + i) - 6
// spheres5[i].position.x = -.5
// }
// const spheres6 = []
// for (let i = 0; i < 10; i++) {
// spheres6.push(MeshBuilder.CreateSphere("sphere" + i, {diameter: .5}));
// spheres6[i].position.y = (1 + i) - 6
// spheres6[i].position.x = .5
// }
// const spheres7 = []
// for (let i = 0; i < 20; i++) {
// spheres7.push(MeshBuilder.CreateSphere("sphere" + i, {diameter: .5}));
// spheres7[i].position.y = (1 + .5*i) - 6
// spheres7[i].position.x = 0
// spheres7[i].position.z = .5
// }
// const spheres8 = []
// for (let i = 0; i < 20; i++) {
// spheres8.push(MeshBuilder.CreateSphere("sphere" + i, {diameter: .5}));
// spheres8[i].position.y = (1 + .5*i) - 6
// spheres8[i].position.x = 0
// spheres8[i].position.z = -.5
// }
//deleteing spheres for this scence
// spheres = []
// spheres1 = []
// spheres2 = []
// spheres3 = []
// spheres4 = []
// spheres5 = []
// spheres6 = []
// spheres7 = []
// spheres8 = []

const boxes2 = []
for (let i = 0; i < 10; i++) {
boxes2.push(MeshBuilder.CreateBox("box2" + i, {size: .5, width: .5, height: .5}));
boxes2[i].position.y = (2 + i) - 7
boxes2[i].position.x = - 1

}

const boxes3 = []
for (let i = 0; i < 10; i++) {
boxes3.push(MeshBuilder.CreateBox("box3" + i, {size: .5, width: .5, height: .5}));
boxes3[i].position.y = (2 + i) - 7
boxes3[i].position.x = 1

}

const boxes4 = []
for (let i = 0; i < 10; i++) {
boxes4.push(MeshBuilder.CreateBox("box4" + i, {size: .5, width: .5, height: .5}));
boxes4[i].position.y = (2 + 3*(i)) - 15
boxes4[i].position.x = 5

}

const boxes5 = []
for (let i = 0; i < 10; i++) {
boxes5.push(MeshBuilder.CreateBox("box5" + i, {size: .5, width: .5, height: .5}));
boxes5[i].position.y = (3 + 3*(i)) - 15
boxes5[i].position.x = 6
boxes5[i].position.z = 1

}

const boxes6 = []
for (let i = 0; i < 10; i++) {
boxes6.push(MeshBuilder.CreateBox("box6" + i, {size: .5, width: .5, height: .5}));
boxes6[i].position.y = (4 + 3*(i)) - 15
boxes6[i].position.x = 7
boxes6[i].position.z = -1

}

const boxes7 = []
for (let i = 0; i < 10; i++) {
boxes7.push(MeshBuilder.CreateBox("box4" + i, {size: .5, width: .5, height: .5}));
boxes7[i].position.y = (2 + 0.7*(i)) - 4
boxes7[i].position.x = -6
boxes7[i].position.z = 1
}

const boxes8 = []
for (let i = 0; i < 10; i++) {
boxes8.push(MeshBuilder.CreateBox("box8" + i, {size: .5, width: .5, height: .5}));
boxes8[i].position.y = (3 + 0.7*(i)) - 4
boxes8[i].position.x = -7
boxes8[i].position.z = 1

}

const boxes9 = []
for (let i = 0; i < 10; i++) {
boxes9.push(MeshBuilder.CreateBox("box9" + i, {size: .5, width: .5, height: .5}));
boxes9[i].position.y = (4 + 0.7*(i)) - 4
boxes9[i].position.x = -8
boxes9[i].position.z = -1

}

// var f = new BABYLON.Vector4(0.5,0, 1, 1); // front image = half the whole image along the width 
// var b = new BABYLON.Vector4(0,0, 0.5, 1); // back image = second half along the width

// const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 50, 
// sideOrientation: BABYLON.Mesh.DOUBLESIDE, frontUVs: f, backUVs: b});

  //var xr = await scene.createDefaultXRExperienceAsync();
  return scene;
}

export default function BabylonViewerWrapper(){
  return (
  <div>
    <SceneComponent antialias onSceneReady={createScene} onRender={onRender} id="my-canvas" />
  </div>
)};
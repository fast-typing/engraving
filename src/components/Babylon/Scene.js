import React from "react";
import { ArcRotateCamera, Vector3, HemisphericLight, Tools, Color4, SceneLoader, } from "@babylonjs/core";
import SceneComponent from "babylonjs-hook";
import "@babylonjs/loaders/glTF";

// Babylon + React то же самое что и просто Babylon, только надо импортировать все методы которые ты используешь и убирать все приписки -> Babylon.Example = Example

// export function ChangeScene(path, scene) {
//   const camera = new ArcRotateCamera("camera", Tools.ToRadians(0), Tools.ToRadians(90), 2000, Vector3.Zero(), scene); // ArcRotateCamera - фиксирует камеру; 2 и 3 параметры обязательны (Угол поворота камеры изначально); 4 параметр расстояние между камерой и сценой
//   camera.attachControl(Vector3.Zero()); // Привязываем камеру к Vector3
//   camera.lowerRadiusLimit = 1500
//   camera.upperRadiusLimit = 3500
//   camera.wheelDeltaPercentage = 0.01

//   // function ShowMe(mesh) {
//   //   camera.target.x = mesh.position.x;
//   //   camera.target.y = mesh.position.y;
//   //   camera.target.z = mesh.position.z;

//   //   var bx = mesh._boundingInfo.boundingBox;

//   //   var mx = Math.max(Math.max(Math.max(Math.abs(bx.maximum.x), Math.abs(bx.minimum.x)),
//   //     Math.max(Math.abs(bx.maximum.y), Math.abs(bx.minimum.y))),
//   //     Math.max(Math.abs(bx.maximum.z), Math.abs(bx.minimum.z)));

//   //   camera.radius = 1. + mx * 3;
//   //   camera.alpha = - mesh.rotation.y;
//   //   camera.beta = 3.14159265 / 2. + mesh.rotation.x;

//   // }

//   const light = new HemisphericLight("light", new Vector3(1, 1, 0), scene); // Создаем свет

//   scene.clearColor = new Color4(0, 0, 0, 0); // Пустой фон
//   SceneLoader.ImportMesh(null, "assets/", path, scene, function (meshArr) {
//     const gun = meshArr[0]
//     gun.name = 'obj'
//     gun.position.y = 0
//     gun.position.x = 0

//   });

// };

const onSceneReady = (scene) => {
  const camera = new ArcRotateCamera("camera", Tools.ToRadians(0), Tools.ToRadians(90), 2000, Vector3.Zero(), scene); // ArcRotateCamera - фиксирует камеру; 2 и 3 параметры обязательны (Угол поворота камеры изначально); 4 параметр расстояние между камерой и сценой
  camera.attachControl(Vector3.Zero()); // Привязываем камеру к Vector3
  camera.lowerRadiusLimit = 1500
  camera.upperRadiusLimit = 3500
  camera.wheelDeltaPercentage = 0.01

  // function ShowMe(mesh) {
  //   camera.target.x = mesh.position.x;
  //   camera.target.y = mesh.position.y;
  //   camera.target.z = mesh.position.z;

  //   var bx = mesh._boundingInfo.boundingBox;

  //   var mx = Math.max(Math.max(Math.max(Math.abs(bx.maximum.x), Math.abs(bx.minimum.x)),
  //     Math.max(Math.abs(bx.maximum.y), Math.abs(bx.minimum.y))),
  //     Math.max(Math.abs(bx.maximum.z), Math.abs(bx.minimum.z)));

  //   camera.radius = 1. + mx * 3;
  //   camera.alpha = - mesh.rotation.y;
  //   camera.beta = 3.14159265 / 2. + mesh.rotation.x;

  // }

  const light = new HemisphericLight("light", new Vector3(1, 1, 0), scene); // Создаем свет

  scene.clearColor = new Color4(0, 0, 0, 0); // Пустой фон

  // function change_model(url, x = 0, y = 0) {
  //   SceneLoader.ImportMesh(null, "assets/", url, scene, function (meshArr) {
  //     const gun = meshArr[0]
  //     gun.name = 'obj'
  //     gun.position.y = y
  //     gun.position.x = x

  //     // gun.actionManager = new ActionManager(scene)
  //     // gun.actionManager.registerAction(   // add on an click event on the plane mesh
  //     //   new ExecuteCodeAction(ActionManager.OnPickTrigger,
  //     //     function (event) {
  //     //       ShowMe(event.meshUnderPointer);
  //     //       //should zoom the camera to the plane with the right position and rotation
  //     //     })
  //     // );
  //   });
  // }

  const mesh = SceneLoader.ImportMesh(null, "assets/", 'ak-47.glb', scene, function (meshArr) {
    const gun = meshArr[0]
    gun.name = 'obj'
    gun.position.y = 0
    gun.position.x = 0
  })

};

export default Scene => (
  <div className="canvas">
    <SceneComponent antialias onSceneReady={onSceneReady} id="my-canvas" />
  </div>
);
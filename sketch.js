  box(50);
  pop();

  // Draw a rectangle (box) with texture
  push();
  translate(100, 0, 0);
  rotateX(boxRotation);
  rotateY(boxRotation);
  rotateZ(boxRotation);
  box(50);
  pop();

  // Draw a rectangle (box) with texture
  push();
  translate(-200, -100, 0);
  rotateX(boxRotation);
  rotateY(boxRotation);
  rotateZ(boxRotation);
  box(50);
  pop();

  // Apply texture
  texture(textureImg);

  // Draw a sphere with texture
  push();
  translate(200, -100, 0);
  rotateX(sphereRotation);
  rotateY(sphereRotation);
  rotateZ(sphereRotation);
  sphere(50);
  pop();

  // Draw a sphere with texture
  push();
  translate(0, 100, 0);
  rotateX(sphereRotation);
  rotateY(sphereRotation);
  rotateZ(sphereRotation);
  sphere(50);
  pop();

  // Update rotations
  boxRotation += 0.01;
  sphereRotation += 0.02;
}

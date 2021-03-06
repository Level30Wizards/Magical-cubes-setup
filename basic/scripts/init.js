import { BoxGeometry, MeshDepthMaterial, PlaneBufferGeometry, MeshBasicMaterial, MeshLambertMaterial, Mesh, AxesHelper, DoubleSide, BackSide } from '../../libs/three.module.js'
import { scene, transformControl } from './basis.js'

export function init() {
    const boxGeometry = new BoxGeometry(1, 1, 1)
    const boxMaterial = new MeshDepthMaterial({ color: 0xbfbdb8})
    const box = new Mesh(boxGeometry, boxMaterial)
    box.castShadow = true;
    box.receiveShadow = true;
    box.position.y = 1.5

    scene.add(box)
    transformControl.attach(box)

    const planeGeometry = new PlaneBufferGeometry( 20, 20 );
    const planeMaterial = new MeshLambertMaterial( {color: 0x8c8b88, side: DoubleSide} );
    const plane = new Mesh( planeGeometry, planeMaterial );
    plane.rotation.x = (Math.PI / 2) * 45
    plane.receiveShadow = true;
    scene.add( plane );

    const axesHelper = new AxesHelper( 5 );
    scene.add( axesHelper );
}
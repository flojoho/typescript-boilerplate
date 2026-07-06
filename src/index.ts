const svgImage = document.getElementById('svg-image')!;

const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

const lineWidth = 10;

svgPath.setAttributeNS(null, 'd', 'M 10 10 H 90 V 90 H 10 L 10 10');
svgPath.setAttributeNS(null, 'stroke', 'white');
svgPath.setAttributeNS(null, 'fill', 'none');
svgPath.setAttributeNS(null, 'stroke-width', `${lineWidth}px`);
svgPath.setAttributeNS(null, 'stroke-linecap', 'round');
svgPath.setAttributeNS(null, 'stroke-linejoin', 'round');
svgImage.appendChild(svgPath);

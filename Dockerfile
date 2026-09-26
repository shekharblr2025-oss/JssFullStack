FROM nginx:alpine

COPY index.html engineering.html styles.css app.js /usr/share/nginx/html/

EXPOSE 80
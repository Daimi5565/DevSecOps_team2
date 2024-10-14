pipeline {
    agent any

    environment {
        // Use your Docker Hub username directly
        DOCKER_HUB_USERNAME = 'saad5565' 
        
        // Use your actual credential ID for Docker Hub password
        DOCKER_HUB_PASSWORD = credentials('Daimi5565') 
    }

    stages {
        stage('Pull Docker Image') {
            steps {
                script {
                    // Login to Docker Hub
                    sh 'echo $DOCKER_HUB_PASSWORD | docker login -u $DOCKER_HUB_USERNAME --password-stdin'
                    
                    // Pull the image from Docker Hub using the full repository path
                    sh 'docker pull saad5565/my-test-app:latest'
                }
            }
        }
        
        // Add your other stages (e.g., Trivy Scan) here
        stage('Trivy Scan') {
            steps {
                script {
                    // Add your Trivy scan commands here
                    sh 'trivy image --exit-code 1 --severity HIGH,CRITICAL saad5565/my-test-app:latest'
                }
            }
        }
    }
}

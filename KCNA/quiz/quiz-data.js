const quizData = [
  {
    "id": 1,
    "question": "Which control plane component bundles several controllers, all of which implement various Kubernetes features?",
    "answers": [
      {
        "text": "Controller manager",
        "correct": true,
        "rationale": "The controller manager bundles multiple controllers into a single process. These controllers implement a variety of Kubernetes features."
      },
      {
        "text": "Controller bundle",
        "correct": false,
        "rationale": "This is not a control plane component."
      },
      {
        "text": "Container runtime",
        "correct": false,
        "rationale": "The container runtime is not a control plane component."
      },
      {
        "text": "Scheduler",
        "correct": false,
        "rationale": "The scheduler handles a specific task on its own. It does not bundle multiple controllers together."
      }
    ]
  },
  {
    "id": 2,
    "question": "What is OCI?",
    "answers": [
      {
        "text": "An organization that creates standards related to containers",
        "correct": true,
        "rationale": "Open Container Initiative (OCI) creates standards for containers, such as image formats and runtimes."
      },
      {
        "text": "A standard for container logging",
        "correct": false,
        "rationale": "OCI is not a standard for container logging, although the OCI organization does create container-related standards."
      },
      {
        "text": "A standard for cluster networking",
        "correct": false,
        "rationale": "OCI is not a cluster networking standard, but a standards organization."
      },
      {
        "text": "A standard for service meshes",
        "correct": false,
        "rationale": "SMI is a service mesh standard, while the OCI is an organization that creates standards for containers."
      }
    ]
  },
  {
    "id": 3,
    "question": "What tool automatically adds or removes Pod replicas as needed based upon real-time usage data?",
    "answers": [
      {
        "text": "Horizontal Pod Autoscaler",
        "correct": true,
        "rationale": "The Horizontal Pod Autoscaler provides horizontal scaling by automatically adjusting the replica count based upon resource usage data."
      },
      {
        "text": "ReplicaSet",
        "correct": false,
        "rationale": "A ReplicaSet does not automatically change the replica count."
      },
      {
        "text": "Vertical Scaler",
        "correct": false,
        "rationale": "This scenario is an instance of horizontal scaling, not vertical scaling."
      },
      {
        "text": "Cluster Autoscaler",
        "correct": false,
        "rationale": "Cluster Autoscaler adds and removes Nodes, not Pods."
      }
    ]
  },
  {
    "id": 4,
    "question": "What Kubernetes feature allows containers to use a hostname to locate a Kubernetes Service?",
    "answers": [
      {
        "text": "Cluster DNS",
        "correct": true,
        "rationale": "The cluster DNS allows containers within the cluster to locate Services using hostnames."
      },
      {
        "text": "kube-proxy",
        "correct": false,
        "rationale": "kube-proxy implements portions of network routing related to Services, but it does not allow Services to be located by hostname."
      },
      {
        "text": "Cluster Network",
        "correct": false,
        "rationale": "The Cluster Network on its own does not do this."
      },
      {
        "text": "API Server",
        "correct": false,
        "rationale": "The API Server does not provide a way for containers to use hostnames to communicate with Services."
      }
    ]
  },
  {
    "id": 5,
    "question": "What does CI/CD stand for?",
    "answers": [
      {
        "text": "Continuous Integration, Continuous Delivery/Deployment",
        "correct": true,
        "rationale": "CI/CD refers the process of continuously integrating code and continuously shipping code for deployment to customers."
      },
      {
        "text": "Cloud Integration, Cloud Deployment",
        "correct": false,
        "rationale": "The \"C\" stands for \"continuous\", not \"cloud.\""
      },
      {
        "text": "Constant Innovation, Consistent Delivery",
        "correct": false,
        "rationale": "CI/CD may enable these things, but this is not what the acronym refers to."
      },
      {
        "text": "Consistent Iteration, Constant Deployment",
        "correct": false,
        "rationale": "CI/CD refers to \"continuous\" practices of integration and delivery."
      }
    ]
  },
  {
    "id": 6,
    "question": "Which PersistentVolume reclaim policy requires you to reclaim unused storage resources manually?",
    "answers": [
      {
        "text": "Retain",
        "correct": true,
        "rationale": "This policy requires you to manually remove old data and reclaim the storage."
      },
      {
        "text": "Delete",
        "correct": false,
        "rationale": "This policy automatically deletes cloud storage resources and does not require manual intervention."
      },
      {
        "text": "Recycle",
        "correct": false,
        "rationale": "This policy automatically deletes old data and does not require manual intervention."
      },
      {
        "text": "Manual",
        "correct": false,
        "rationale": "This is not a valid reclaim policy."
      }
    ]
  },
  {
    "id": 7,
    "question": "For security reasons, you wish to block network access to and from a Pod except for the network communication that it specifically needs. What tool can you use to do this?",
    "answers": [
      {
        "text": "NetworkPolicy",
        "correct": true,
        "rationale": "NetworkPolicy can help you restrict what network traffic is allowed for a Pod."
      },
      {
        "text": "OPA Gatekeeper",
        "correct": false,
        "rationale": "OPA Gatekeeper does not control network traffic for running Pods."
      },
      {
        "text": "A Headless Service",
        "correct": false,
        "rationale": "Headless Services would not be able to block network access to a Pod."
      },
      {
        "text": "NetworkFirewall",
        "correct": false,
        "rationale": "This is not a Kubernetes feature."
      }
    ]
  },
  {
    "id": 8,
    "question": "Why does Kubernetes no longer support using Docker as the container runtime?",
    "answers": [
      {
        "text": "Docker does not implement the CRI standard.",
        "correct": true,
        "rationale": "Docker does not support the CRI standard, and Kubernetes no longer maintains dockershim, the tool which acted as a bridge between CRI and Docker."
      },
      {
        "text": "Docker has issues with performance.",
        "correct": false,
        "rationale": "There are no performance issues involved in Kubernetes' decision not to support Docker as a container runtime."
      },
      {
        "text": "Docker is not able to manage containers.",
        "correct": false,
        "rationale": "Docker includes many features for managing containers."
      },
      {
        "text": "Docker is no longer updated.",
        "correct": false,
        "rationale": "Docker is still supported and remains an active product."
      }
    ]
  },
  {
    "id": 9,
    "question": "Which of the following is a container runtime?",
    "answers": [
      {
        "text": "CRI-O",
        "correct": true,
        "rationale": "CRI-O is a container runtime."
      },
      {
        "text": "VMWare",
        "correct": false,
        "rationale": "VMWare makes virtualization software. It is not a container runtime."
      },
      {
        "text": "etcd",
        "correct": false,
        "rationale": "etcd provides a storage backend for the Kubernetes API. It is not a container runtime."
      },
      {
        "text": "Rook",
        "correct": false,
        "rationale": "Rook provides storage orchestration. It is not a container runtime."
      }
    ]
  },
  {
    "id": 10,
    "question": "What are the two primary methods of service discovery in Kubernetes?",
    "answers": [
      {
        "text": "DNS and environment variables",
        "correct": true,
        "rationale": "You can locate Services by hostname using DNS, and Kubernetes can automatically inject service discovery data into containers in the form of environment variables."
      },
      {
        "text": "DNS and the Kubernetes API",
        "correct": false,
        "rationale": "The Kubernetes API is not a primary method of service discovery."
      },
      {
        "text": "ConfigMaps and the Kubernetes API",
        "correct": false,
        "rationale": "Both of these are not considered primary methods of service discovery."
      },
      {
        "text": "The Kubernetes Service Directory and DNS",
        "correct": false,
        "rationale": "Kubernetes does not include a \"Service Directory.\""
      }
    ]
  },
  {
    "id": 11,
    "question": "How many containers can share a single Pod?",
    "answers": [
      {
        "text": "One or more",
        "correct": true,
        "rationale": "You can have one or more containers in a Pod."
      },
      {
        "text": "No more than three",
        "correct": false,
        "rationale": "You can have more than three containers in a Pod."
      },
      {
        "text": "Depends on the replica count",
        "correct": false,
        "rationale": "Replica counts have no effect on how many containers can share a Pod."
      },
      {
        "text": "Only one",
        "correct": false,
        "rationale": "You can have more than one container in a Pod."
      }
    ]
  },
  {
    "id": 12,
    "question": "Which of the following is an example of container orchestration?",
    "answers": [
      {
        "text": "Automatically assigning a container to a server and running it on that server",
        "correct": true,
        "rationale": "This is an example of container orchestration since it involves using automation to handle the work of managing containerized workloads."
      },
      {
        "text": "Compiling code and packaging it within a container image using a single command",
        "correct": false,
        "rationale": "This deals with building container images, not managing containers."
      },
      {
        "text": "Configuring server logging so that logs do not consume too much disk space",
        "correct": false,
        "rationale": "This is an important operational task, but it is not directly related to managing containers."
      },
      {
        "text": "Writing a script to restart the server every night",
        "correct": false,
        "rationale": "This example involves automation, but it does not directly deal with managing containerized workloads."
      }
    ]
  },
  {
    "id": 13,
    "question": "What is CNCF?",
    "answers": [
      {
        "text": "Cloud Native Computing Foundation",
        "correct": true,
        "rationale": "CNCF stands for Cloud Native Computing Foundation. It is a vendor-neutral organization that promotes cloud technologies."
      },
      {
        "text": "Cloud Native Component Fundamentals",
        "correct": false,
        "rationale": "CNCF is a vendor-neutral organization that promotes cloud technologies. This is not the correct name of the organization."
      },
      {
        "text": "Cloud Native Code Foundation",
        "correct": false,
        "rationale": "This is not the correct name of the organization."
      },
      {
        "text": "Cloud Native Capital Fund",
        "correct": false,
        "rationale": "CNCF is a vendor-neutral organization that promotes cloud technologies; it is not a fund."
      }
    ]
  },
  {
    "id": 14,
    "question": "Which of the following supports the CRI standard?",
    "answers": [
      {
        "text": "containerd",
        "correct": true,
        "rationale": "containerd supports the CRI standard."
      },
      {
        "text": "API Server",
        "correct": false,
        "rationale": "API Server does not work with container runtimes directly and therefore does not need to support the CRI standard."
      },
      {
        "text": "Argo CD",
        "correct": false,
        "rationale": "Argo CD is not a container runtime, and it does not support the CRI standard."
      },
      {
        "text": "Docker",
        "correct": false,
        "rationale": "Docker does not support the CRI standard by default."
      }
    ]
  },
  {
    "id": 15,
    "question": "What is the name for a tool that manages communication between application components, often adding additional functionality, by routing communication through proxies?",
    "answers": [
      {
        "text": "Service mesh",
        "correct": true,
        "rationale": "A service mesh uses proxies to manage network traffic and provide additional features."
      },
      {
        "text": "NetworkPolicy",
        "correct": false,
        "rationale": "A NetworkPolicy does not manage communication; it merely provides a way to restrict it."
      },
      {
        "text": "Communication Manager",
        "correct": false,
        "rationale": "This is not generally used to refer to the type of tool described."
      },
      {
        "text": "ClusterIP service",
        "correct": false,
        "rationale": "A ClusterIP service does not manage communication or add additional features; it simply exposes applications within the cluster."
      }
    ]
  },
  {
    "id": 16,
    "question": "You have a Pod called sol with a container called saturn. Which of the following commands would allow you to retrieve logs for the saturn container?",
    "answers": [
      {
        "text": "kubectl logs sol -c saturn",
        "correct": true,
        "rationale": "This command specifies the Pod name and the container name correctly."
      },
      {
        "text": "kubectl get logs sol -c saturn",
        "correct": false,
        "rationale": "The get keyword is not correct for retrieving logs."
      },
      {
        "text": "kubectl logs saturn -p sol",
        "correct": false,
        "rationale": "The -p flag is not the correct way to identify the Pod. Also, you need the -c flag to identify the container name."
      },
      {
        "text": "kubectl logs -p sol -c saturn",
        "correct": false,
        "rationale": "You do not need to use the -p flag to specify the Pod name."
      }
    ]
  },
  {
    "id": 17,
    "question": "Which part of a Kubernetes cluster is responsible for running container workloads?",
    "answers": [
      {
        "text": "Worker Node",
        "correct": true,
        "rationale": "Worker Nodes are responsible for executing containerized workloads."
      },
      {
        "text": "Control plane",
        "correct": false,
        "rationale": "The control plane manages the cluster, it does not run workloads."
      },
      {
        "text": "kube-proxy",
        "correct": false,
        "rationale": "kube-proxy implements some Kubernetes networking functionality. It does not run workloads."
      },
      {
        "text": "etcd",
        "correct": false,
        "rationale": "etcd provides object storage. It does not run workloads."
      }
    ]
  },
  {
    "id": 18,
    "question": "What organization created the container runtime standard implemented by runc?",
    "answers": [
      {
        "text": "OCI",
        "correct": true,
        "rationale": "Open Container Initiative (OCI) created the OCI runtime spec standard, which is implemented by runc."
      },
      {
        "text": "CNCF",
        "correct": false,
        "rationale": "CNCF did not create this standard, but a separate organization."
      },
      {
        "text": "Kubernetes",
        "correct": false,
        "rationale": "Kubernetes benefits from the standard in question, but did not create it."
      },
      {
        "text": "Google",
        "correct": false,
        "rationale": "The standard implemented by runc is the OCI runtime spec standard, which was not created by Google."
      }
    ]
  },
  {
    "id": 19,
    "question": "You have an application that is nearing its usage limit. To increase the amount of users it can handle, you allocate additional memory resources to each instance of the application. What type of scaling is this?",
    "answers": [
      {
        "text": "Vertical Scaling",
        "correct": true,
        "rationale": "You are adding resources to existing instances, which is vertical scaling."
      },
      {
        "text": "Horizontal Scaling",
        "correct": false,
        "rationale": "You are not adding new instances, but adding resources to existing instances. This is not horizontal scaling."
      },
      {
        "text": "Recursive Scaling",
        "correct": false,
        "rationale": "This is not generally used as a term for a type of scaling."
      },
      {
        "text": "Cluster Autoscaling",
        "correct": false,
        "rationale": "Cluster autoscaler automatically scales by adding Nodes to the cluster, which is not what is described in this scenario."
      }
    ]
  },
  {
    "id": 20,
    "question": "Which Kubernetes resource enables you to run a containerized task to completion and automatically retries if the task fails?",
    "answers": [
      {
        "text": "Job",
        "correct": true,
        "rationale": "A Job executes a container and ensures it runs to completion, retrying if it fails."
      },
      {
        "text": "Service",
        "correct": false,
        "rationale": "A Service does not execute containerized workloads; it provides network abstraction for a set of replica Pods."
      },
      {
        "text": "Deployment",
        "correct": false,
        "rationale": "A Deployment is designed for container processes that run continuously, not tasks that run to completion."
      },
      {
        "text": "Task",
        "correct": false,
        "rationale": "This is not a valid Kubernetes resource by default."
      }
    ]
  },
  {
    "id": 21,
    "question": "Which of the following tools is built on the GitOps Toolkit?",
    "answers": [
      {
        "text": "Flux",
        "correct": true,
        "rationale": "Flux is a GitOps tool, and it is built on a standard library called the GitOps Toolkit."
      },
      {
        "text": "Argo CD",
        "correct": false,
        "rationale": "Argo CD is a GitOps tool, but it is not built on the GitOps Toolkit."
      },
      {
        "text": "Linkerd",
        "correct": false,
        "rationale": "Linkerd is a service mesh. It is not built on the GitOps Toolkit."
      },
      {
        "text": "GitHub",
        "correct": false,
        "rationale": "GitHub offers Git repository management. It is not built on the GitOps Toolkit."
      }
    ]
  },
  {
    "id": 22,
    "question": "You have a Kubernetes application that is nearing the peak of how many users it can handle. As a result, you add some new replica Pods to handle the additional load. What type of scaling is this?",
    "answers": [
      {
        "text": "Horizontal scaling",
        "correct": true,
        "rationale": "This involves adding new instances, which is horizontal scaling."
      },
      {
        "text": "Vertical scaling",
        "correct": false,
        "rationale": "This does not involve adding resources to existing instances, so it is not vertical scaling."
      },
      {
        "text": "Replica scaling",
        "correct": false,
        "rationale": "This is not generally used as a term for a type of scaling."
      },
      {
        "text": "Autoscaling",
        "correct": false,
        "rationale": "Adding the replicas was not automatic, so this is not autoscaling."
      }
    ]
  },
  {
    "id": 23,
    "question": "Which resource would allow you to manage a number of replica Pods for a stateless application?",
    "answers": [
      {
        "text": "Deployment",
        "correct": true,
        "rationale": "A Deployment is designed to manage replica Pods for stateless applications."
      },
      {
        "text": "StatelessSet",
        "correct": false,
        "rationale": "This is not a valid Kubernetes resource by default."
      },
      {
        "text": "DaemonSet",
        "correct": false,
        "rationale": "A DaemonSet's replicas are tied to Nodes and would not be a good solution here."
      },
      {
        "text": "StatefulSet",
        "correct": false,
        "rationale": "A StatefulSet manages stateful applications, not stateless."
      }
    ]
  },
  {
    "id": 24,
    "question": "Which of the following is a GitOps tool?",
    "answers": [
      {
        "text": "Argo CD",
        "correct": true,
        "rationale": "Argo CD is a GitOps tool."
      },
      {
        "text": "OPA Gatekeeper",
        "correct": false,
        "rationale": "OPA Gatekeeper is a policy management and enforcement engine, not a GitOps tool."
      },
      {
        "text": "kubectl",
        "correct": false,
        "rationale": "kubectl is a command line tool for Kubernetes, not a GitOps tool."
      },
      {
        "text": "Rook",
        "correct": false,
        "rationale": "Rook is a storage orchestrator, not a GitOps tool."
      }
    ]
  },
  {
    "id": 25,
    "question": "What standard does kubelet use to communicate with the container runtime?",
    "answers": [
      {
        "text": "Container Runtime Interface (CRI)",
        "correct": true,
        "rationale": "kubelet can communicate with any runtime that supports the CRI standard."
      },
      {
        "text": "CRI-O",
        "correct": false,
        "rationale": "CRI-O is a runtime that implements the standard, but it is not the name of the standard itself."
      },
      {
        "text": "Service Mesh Interface (SMI)",
        "correct": false,
        "rationale": "This is a Kubernetes standard interface, but it is not the standard used by kubelet to communicate with the container runtime."
      },
      {
        "text": "containerd",
        "correct": false,
        "rationale": "containerd is a runtime that implements the standard, but it is not the name of the standard itself."
      }
    ]
  },
  {
    "id": 26,
    "question": "What is a Dockerfile?",
    "answers": [
      {
        "text": "A text file containing commands used to build an image",
        "correct": true,
        "rationale": "A Dockerfile describes the commands used to build a container image."
      },
      {
        "text": "A file containing software and all of its dependencies",
        "correct": false,
        "rationale": "This could describe a container image, but not a Dockerfile."
      },
      {
        "text": "A configuration file for Docker",
        "correct": false,
        "rationale": "A Dockerfile is not a configuration file."
      },
      {
        "text": "A script used to automate Docker tasks",
        "correct": false,
        "rationale": "A Dockerfile is not a script for automated tasks, but a set of commands used to build an image."
      }
    ]
  },
  {
    "id": 27,
    "question": "The Kubernetes API provides an interface for storing objects. Which of the following describes the type of objects stored by the Kubernetes API?",
    "answers": [
      {
        "text": "REST",
        "correct": true,
        "rationale": "Kubernetes objects are RESTful objects."
      },
      {
        "text": "YAML",
        "correct": false,
        "rationale": "YAML can be used to transfer object data, but Kubernetes objects are not necessarily in the YAML format."
      },
      {
        "text": "Containers",
        "correct": false,
        "rationale": "Kubernetes manages containers, but Kubernetes objects are not containers."
      },
      {
        "text": "JSON",
        "correct": false,
        "rationale": "JSON can be used to transfer object data, but Kubernetes objects are not necessarily in the JSON format."
      }
    ]
  },
  {
    "id": 28,
    "question": "Which Prometheus metric type tracks a single numeric value that can both rise and fall over time?",
    "answers": [
      {
        "text": "Gauge",
        "correct": true,
        "rationale": "A gauge is a single value that can increase or decrease over time."
      },
      {
        "text": "Summary",
        "correct": false,
        "rationale": "A summary tracks multiple values, not a single numeric value."
      },
      {
        "text": "FluidIndicator",
        "correct": false,
        "rationale": "This is not a Prometheus metric type."
      },
      {
        "text": "Counter",
        "correct": false,
        "rationale": "A counter cannot decrease. It can only increase or be reset to zero."
      }
    ]
  },
  {
    "id": 29,
    "question": "What language was used to build both Flux and Argo CD?",
    "answers": [
      {
        "text": "Go",
        "correct": true,
        "rationale": "Flux and Argo CD are both written in Go."
      },
      {
        "text": "Python",
        "correct": false,
        "rationale": "Neither Flux nor Argo CD are written in Python."
      },
      {
        "text": "JavaScript",
        "correct": false,
        "rationale": "Neither Flux nor Argo CD are written in JavaScript."
      },
      {
        "text": "COBOL",
        "correct": false,
        "rationale": "COBOL is a very old language. It was not used to build Flux or Argo CD."
      }
    ]
  },
  {
    "id": 30,
    "question": "Which of the following factors does scheduling take into account when selecting a Node?",
    "answers": [
      {
        "text": "Resource requirements",
        "correct": true,
        "rationale": "Scheduling takes resource requirements into account in the form of resource requests."
      },
      {
        "text": "The number of existing Pods on a Node",
        "correct": false,
        "rationale": "Scheduling does not directly take into account the number of existing Pods."
      },
      {
        "text": "How many replicas there are in a Deployment",
        "correct": false,
        "rationale": "Scheduling acts upon each replica separately. It does not directly take into account the number of replicas."
      },
      {
        "text": "Services",
        "correct": false,
        "rationale": "Scheduling does not interact with Services."
      }
    ]
  },
  {
    "id": 31,
    "question": "You need to run a startup task before a Pod's container starts up. What Kubernetes feature can help you accomplish this?",
    "answers": [
      {
        "text": "Init container",
        "correct": true,
        "rationale": "Init containers allow you to run a containerized task before the main container starts up."
      },
      {
        "text": "Startup probe",
        "correct": false,
        "rationale": "A startup probe is designed to detect the status of a container as it is starting up. It is not designed to execute a task before startup."
      },
      {
        "text": "Sidecar container",
        "correct": false,
        "rationale": "A sidecar container runs alongside the main container. It does not run before the main container starts up."
      },
      {
        "text": "DaemonSet",
        "correct": false,
        "rationale": "A DaemonSet runs Pods on each Node in the cluster. It would not help you run a task before a Pod's container starts up."
      }
    ]
  },
  {
    "id": 32,
    "question": "What is the standard Kubernetes interface for container runtimes called?",
    "answers": [
      {
        "text": "CRI",
        "correct": true,
        "rationale": "CRI, or Container Runtime Interface, is the standard Kubernetes interface for container runtimes."
      },
      {
        "text": "containerd",
        "correct": false,
        "rationale": "containerd is a container runtime that supports the standard interface, but this is not the name of the interface."
      },
      {
        "text": "CRI-O",
        "correct": false,
        "rationale": "CRI-O is a container runtime that supports the standard interface, but this is not the name of the interface."
      },
      {
        "text": "kubelet",
        "correct": false,
        "rationale": "kubelet is the Kubernetes Node agent, not the standard interface for container runtimes."
      }
    ]
  },
  {
    "id": 33,
    "question": "What Linux feature is used to provide isolation for containers?",
    "answers": [
      {
        "text": "Control groups",
        "correct": true,
        "rationale": "Control groups provide isolation for container processes, keeping them separate from other processes on the host."
      },
      {
        "text": "Services",
        "correct": false,
        "rationale": "Services are not used to provide isolation for containers."
      },
      {
        "text": "Processes",
        "correct": false,
        "rationale": "Processes are used by Linux to run containers, but they do not provide isolation directly."
      },
      {
        "text": "NetworkPolicy",
        "correct": false,
        "rationale": "This is a feature of Kubernetes, not Linux."
      }
    ]
  },
  {
    "id": 34,
    "question": "You have a stateful application where the Pods need to maintain consistent Pod names and ordering. What Kubernetes resource would be best to use?",
    "answers": [
      {
        "text": "StatefulSet",
        "correct": true,
        "rationale": "A StatefulSet is designed to manage stateful replicas with a sticky identity, such as consistent Pod names and ordering."
      },
      {
        "text": "Deployment",
        "correct": false,
        "rationale": "A Deployment is built for stateless applications, not stateful."
      },
      {
        "text": "DaemonSet",
        "correct": false,
        "rationale": "A DaemonSet ties replicas to Nodes, and it does not have the functionality to directly support stateful applications."
      },
      {
        "text": "ReplicaSet",
        "correct": false,
        "rationale": "A ReplicaSet is not designed to be used for stateful applications."
      }
    ]
  },
  {
    "id": 35,
    "question": "Which control plane component bundles controllers that communicate with cloud provider APIs?",
    "answers": [
      {
        "text": "Cloud controller manager",
        "correct": true,
        "rationale": "The cloud controller manager bundles several controllers into a single process. These controllers handle integration with cloud providers."
      },
      {
        "text": "Controller manager",
        "correct": false,
        "rationale": "The controller manager bundles controllers, but they do not communicate with cloud provider APIs."
      },
      {
        "text": "etcd",
        "correct": false,
        "rationale": "etcd provides object storage, not cloud integration."
      },
      {
        "text": "Cloud Manager",
        "correct": false,
        "rationale": "This is not the correct name of a Kubernetes control plane component."
      }
    ]
  },
  {
    "id": 36,
    "question": "What does the Cluster Autoscaler do?",
    "answers": [
      {
        "text": "Automatically scale the cluster by adding and removing cluster Nodes.",
        "correct": true,
        "rationale": "This describes horizontal cluster scaling, which is what Cluster Autoscaler does."
      },
      {
        "text": "Automatically scale applications by allocating resources to existing Pods.",
        "correct": false,
        "rationale": "This describes vertical application scaling. Cluster Autoscaler does horizontal cluster scaling."
      },
      {
        "text": "Automatically scale applications by adding and removing Pods.",
        "correct": false,
        "rationale": "This describes horizontal application scaling. Cluster Autoscaler does horizontal cluster scaling."
      },
      {
        "text": "Automatically scale the cluster by adding and removing compute resources to/from existing Nodes.",
        "correct": false,
        "rationale": "This describes vertical cluster scaling. Cluster Autoscaler does horizontal cluster scaling."
      }
    ]
  },
  {
    "id": 37,
    "question": "What is the primary interface for a Kubernetes cluster?",
    "answers": [
      {
        "text": "API Server",
        "correct": true,
        "rationale": "The API Server provides the primary interface for the cluster by serving the Kubernetes API."
      },
      {
        "text": "etcd",
        "correct": false,
        "rationale": "etcd provides backend object storage; it does not act as an interface."
      },
      {
        "text": "Control Plane",
        "correct": false,
        "rationale": "The interface is only one part of the control plane."
      },
      {
        "text": "kubectl",
        "correct": false,
        "rationale": "kubectl is a tool that can be used to communicate with the cluster from the command line, but it is not the primary interface for the cluster itself."
      }
    ]
  },
  {
    "id": 38,
    "question": "What framework allows developers to write code without worrying about servers or server-related things, like operating systems and scaling?",
    "answers": [
      {
        "text": "Serverless",
        "correct": true,
        "rationale": "Serverless allows developers to simply supply code without thinking about the server environment."
      },
      {
        "text": "Kubernetes",
        "correct": false,
        "rationale": "Kubernetes still requires users to think about Nodes, and it can sometimes require some awareness of the operating system."
      },
      {
        "text": "Container orchestration",
        "correct": false,
        "rationale": "Container orchestration can still require the user to think about the operating system when building and running containers."
      },
      {
        "text": "Amazon EC2",
        "correct": false,
        "rationale": "EC2 provides virtual servers, but to use them, you still have to think about server-related issues yourself."
      }
    ]
  },
  {
    "id": 39,
    "question": "You have a Kubernetes application that needs additional resources. To address this need, you add a new Node to the cluster. What type of scaling is this?",
    "answers": [
      {
        "text": "Horizontal Scaling",
        "correct": true,
        "rationale": "Since this involves adding a new instance (a Node), it is horizontal scaling."
      },
      {
        "text": "Round-Robin Scaling",
        "correct": false,
        "rationale": "This is not generally used as a term for a type of scaling."
      },
      {
        "text": "Vertical Scaling",
        "correct": false,
        "rationale": "This involves adding a new instance, so it is not vertical scaling."
      },
      {
        "text": "Anti-Scaling",
        "correct": false,
        "rationale": "This is not generally used as a term for a type of scaling."
      }
    ]
  },
  {
    "id": 40,
    "question": "In distributed system tracing, what term refers to data about a request as it makes its way through one component of the system?",
    "answers": [
      {
        "text": "Span",
        "correct": true,
        "rationale": "A span focuses on requests as they pass through individual system components."
      },
      {
        "text": "Component log",
        "correct": false,
        "rationale": "This is not a term usually associated with distributed system tracing."
      },
      {
        "text": "Request ID",
        "correct": false,
        "rationale": "Request IDs are often used with distributed system tracing, but this term does not refer to a request as it passes through a single component."
      },
      {
        "text": "Trace",
        "correct": false,
        "rationale": "A trace focuses on the request as it passes through the entire system, not just a single component."
      }
    ]
  },
  {
    "id": 41,
    "question": "What Kubernetes feature can expose a Service externally, along with additional functionality such as SSL termination?",
    "answers": [
      {
        "text": "Ingress",
        "correct": true,
        "rationale": "Ingress allows you to expose Services externally and can add additional features."
      },
      {
        "text": "ExternalName Service",
        "correct": false,
        "rationale": "ExternalName Services expose external entities within the cluster. They do not expose cluster Services externally."
      },
      {
        "text": "NodePort Service",
        "correct": false,
        "rationale": "A NodePort Service can expose externally, but it does not offer additional features."
      },
      {
        "text": "Egress",
        "correct": false,
        "rationale": "This is not a Kubernetes feature capable of exposing Services."
      }
    ]
  },
  {
    "id": 42,
    "question": "What is containerd?",
    "answers": [
      {
        "text": "Container runtime",
        "correct": true,
        "rationale": "containerd is a container runtime."
      },
      {
        "text": "Kubernetes agent",
        "correct": false,
        "rationale": "kubelet is the Kubernetes agent, not containerd."
      },
      {
        "text": "Kubernetes API data backend",
        "correct": false,
        "rationale": "etcd fulfills this function, not containerd."
      },
      {
        "text": "Admission controller",
        "correct": false,
        "rationale": "An admission controller is a tool for adding functionality to the Kubernetes API. This is not what containerd does."
      }
    ]
  },
  {
    "id": 43,
    "question": "Which statement accurately describes the relationship between a trace and span?",
    "answers": [
      {
        "text": "A span is part of a trace.",
        "correct": true,
        "rationale": "A trace looks at a request as it moves through the whole system. A span looks at one part of the trace as the request moves through a single component."
      },
      {
        "text": "A trace and a span are the same thing.",
        "correct": false,
        "rationale": "A trace looks at the whole system, while a span looks at a single component. They are related, but they are not the same thing."
      },
      {
        "text": "A trace is part of a span.",
        "correct": false,
        "rationale": "A trace is larger than a span, as it looks at the whole system while a span looks at only one component."
      },
      {
        "text": "Traces and spans are unrelated.",
        "correct": false,
        "rationale": "Traces and spans look at the same data, but a span is focused on one small part of the overall trace. Therefore, they are related."
      }
    ]
  },
  {
    "id": 44,
    "question": "What tool allows you to create custom policies to control what can be done in your cluster?",
    "answers": [
      {
        "text": "OPA Gatekeeper",
        "correct": true,
        "rationale": "OPA Gatekeeper provides a way to define custom policies that can limit what users can do in the cluster."
      },
      {
        "text": "etcd",
        "correct": false,
        "rationale": "This provides storage for the Kubernetes API; it is not a custom policy engine."
      },
      {
        "text": "Bearer Token Authentication",
        "correct": false,
        "rationale": "This is an authentication method, not a custom policy engine."
      },
      {
        "text": "OpenID Connect",
        "correct": false,
        "rationale": "This is an authentication method, not a custom policy engine."
      }
    ]
  },
  {
    "id": 45,
    "question": "Which of the following is a Kubernetes worker node component?",
    "answers": [
      {
        "text": "kube-proxy",
        "correct": true,
        "rationale": "kube-proxy is a Kubernetes worker node component."
      },
      {
        "text": "etcd",
        "correct": false,
        "rationale": "This is not a worker node component."
      },
      {
        "text": "container-logger",
        "correct": false,
        "rationale": "This is not a valid Kubernetes component."
      },
      {
        "text": "kubectl",
        "correct": false,
        "rationale": "This is a command line tool, not a worker node component."
      }
    ]
  },
  {
    "id": 46,
    "question": "Which of the following statements about serverless is FALSE?",
    "answers": [
      {
        "text": "Serverless means there is no server.",
        "correct": true,
        "rationale": "With serverless, servers do exist. Developers just don't need to think about them."
      },
      {
        "text": "Serverless means developers don't have to think about scaling.",
        "correct": false,
        "rationale": "Serverless handles all scaling concerns seamlessly, meaning developers don't have to think about scaling."
      },
      {
        "text": "Serverless means developers don't need to know what operating system their code will run on.",
        "correct": false,
        "rationale": "Serverless removes the need for developers to worry about operating systems."
      },
      {
        "text": "Serverless means developers can focus only on supplying code.",
        "correct": false,
        "rationale": "Serverless allows developers to focus on their main role: developing code."
      }
    ]
  },
  {
    "id": 47,
    "question": "You have a cluster running in the AWS (Amazon Web Services) cloud. A user creates a LoadBalancer Service, and an AWS load balancer is automatically configured to handle the traffic. Which Kubernetes component was most directly responsible for creating the AWS load balancer?",
    "answers": [
      {
        "text": "Cloud controller manager",
        "correct": true,
        "rationale": "The cloud controller manager handles cloud integration and would therefore be responsible for creating the AWS load balancer."
      },
      {
        "text": "Controller manager",
        "correct": false,
        "rationale": "The controller manager handles many features, but it does not handle cloud integration."
      },
      {
        "text": "Cloud API server",
        "correct": false,
        "rationale": "This is not the name of a Kubernetes component."
      },
      {
        "text": "etcd",
        "correct": false,
        "rationale": "etcd provides data storage. It does not handle cloud integration."
      }
    ]
  },
  {
    "id": 48,
    "question": "What is application delivery?",
    "answers": [
      {
        "text": "The processes and techniques used to ship new code to customers",
        "correct": true,
        "rationale": "Application delivery refers to how we get new code in front of customers."
      },
      {
        "text": "Completing the first release version of an application",
        "correct": false,
        "rationale": "Application delivery is focused on the processes used to deliver all code changes, not just writing code to complete the first release."
      },
      {
        "text": "The process of creating Pods within a cluster",
        "correct": false,
        "rationale": "Creating Pods could be part of delivering an application, but application delivery is not specific to Kubernetes or the creation of Pods."
      },
      {
        "text": "The process of writing code to meet user requirements",
        "correct": false,
        "rationale": "Application delivery is not used to refer to writing code that meets user specifications."
      }
    ]
  },
  {
    "id": 49,
    "question": "What Kubernetes resource would you use to run one Pod on each of your Nodes?",
    "answers": [
      {
        "text": "DaemonSet",
        "correct": true,
        "rationale": "A DaemonSet runs replicas on all (or just some) Nodes in the cluster."
      },
      {
        "text": "ReplicaSet",
        "correct": false,
        "rationale": "A ReplicaSet does not tie replicas to Nodes."
      },
      {
        "text": "Deployment",
        "correct": false,
        "rationale": "A Deployment does not tie replicas to Nodes."
      },
      {
        "text": "ClusterSet",
        "correct": false,
        "rationale": "This is not a valid Kubernetes resource by default."
      }
    ]
  },
  {
    "id": 50,
    "question": "Which of the following is a Kubernetes control plane component?",
    "answers": [
      {
        "text": "Scheduler",
        "correct": true,
        "rationale": "The scheduler is a control plane component."
      },
      {
        "text": "container-manager",
        "correct": false,
        "rationale": "This is not a Kubernetes component."
      },
      {
        "text": "kube-proxy",
        "correct": false,
        "rationale": "kube-proxy is worker Node component."
      },
      {
        "text": "container runtime",
        "correct": false,
        "rationale": "The container runtime is a worker node component."
      }
    ]
  },
  {
    "id": 51,
    "question": "Which Prometheus metric type tracks a single numeric value that can increase over time but not decrease?",
    "answers": [
      {
        "text": "Counter",
        "correct": true,
        "rationale": "A counter is a single value that can only increase or be reset to zero. It cannot decrease."
      },
      {
        "text": "Histogram",
        "correct": false,
        "rationale": "A histogram tracks multiple values, not just a single value that changes over time."
      },
      {
        "text": "Gauge",
        "correct": false,
        "rationale": "A gauge can both increase and decrease over time."
      },
      {
        "text": "NumericStat",
        "correct": false,
        "rationale": "This is not a Prometheus metric type."
      }
    ]
  },
  {
    "id": 52,
    "question": "You have a stateless application and you want to roll out new code using rolling updates. Which Kubernetes resource can you use to accomplish this?",
    "answers": [
      {
        "text": "Deployment",
        "correct": true,
        "rationale": "A Deployment is designed for stateless applications and supports rolling updates."
      },
      {
        "text": "RollingDeployment",
        "correct": false,
        "rationale": "This is not a valid Kubernetes resource by default."
      },
      {
        "text": "StatefulSet",
        "correct": false,
        "rationale": "A StatefulSet is not designed for stateless applications."
      },
      {
        "text": "ReplicaSet",
        "correct": false,
        "rationale": "A ReplicaSet by itself does not support rolling updates."
      }
    ]
  },
  {
    "id": 53,
    "question": "Which Kubernetes resource requires you to manually create a headless Service?",
    "answers": [
      {
        "text": "StatefulSet",
        "correct": true,
        "rationale": "A StatefulSet requires a headless Service to help manage sticky network identities for Pods."
      },
      {
        "text": "ReplicaSet",
        "correct": false,
        "rationale": "A ReplicaSet does not require a headless Service."
      },
      {
        "text": "Deployment",
        "correct": false,
        "rationale": "A Deployment does not require a headless Service."
      },
      {
        "text": "HeadlessSet",
        "correct": false,
        "rationale": "This is not a valid Kubernetes resource by default."
      }
    ]
  },
  {
    "id": 54,
    "question": "Which of the following statements about Secrets is FALSE?",
    "answers": [
      {
        "text": "Secret data is encrypted by default.",
        "correct": true,
        "rationale": "Secret encryption requires additional cluster configuration that is not in place by default."
      },
      {
        "text": "Secret data can be passed to containers via environment variables.",
        "correct": false,
        "rationale": "Secret data can be passed to containers in the form of environment variables or volume mounts."
      },
      {
        "text": "You can mark secrets as immutable.",
        "correct": false,
        "rationale": "You can use the immutable field to prevent Secret data from being changed."
      },
      {
        "text": "Secrets are designed to store sensitive configuration data.",
        "correct": false,
        "rationale": "Secrets are similar to ConfigMaps, but designed to securely store more sensitive data like passwords or API keys."
      }
    ]
  },
  {
    "id": 55,
    "question": "Which of the following is NOT a Kubernetes component?",
    "answers": [
      {
        "text": "Docker",
        "correct": true,
        "rationale": "Docker is not a Kubernetes component."
      },
      {
        "text": "Scheduler",
        "correct": false,
        "rationale": "The scheduler is a Kubernetes control plane component."
      },
      {
        "text": "Cloud controller manager",
        "correct": false,
        "rationale": "The cloud controller manager is a Kubernetes control plane component."
      },
      {
        "text": "kube-proxy",
        "correct": false,
        "rationale": "kube-proxy is a Kubernetes worker Node component."
      }
    ]
  },
  {
    "id": 56,
    "question": "Which of the following is a reason why cloud native technology is important?",
    "answers": [
      {
        "text": "It removes roadblocks that prevent innovation.",
        "correct": true,
        "rationale": "Cloud native technology is focused on overcoming challenges that get in the way of innovation."
      },
      {
        "text": "It keeps technology the same.",
        "correct": false,
        "rationale": "If anything, cloud native technology invites change through innovation."
      },
      {
        "text": "It slows things down so that we can build software more carefully.",
        "correct": false,
        "rationale": "Cloud technology is focused on building rapidly while maintaining stability."
      },
      {
        "text": "It encourages companies to build their own datacenters.",
        "correct": false,
        "rationale": "You can use cloud native technology in your own datacenter, but cloud native technology does not necessarily encourage you to do so."
      }
    ]
  },
  {
    "id": 57,
    "question": "What are the 4 C's of cloud native security, listed in order starting with the one the user has the MOST control over and ending with the one the user has the LEAST control over?",
    "answers": [
      {
        "text": "Code, Containers, Clusters, and Cloud",
        "correct": true,
        "rationale": "These are the 4 C's. Users have the most control over Code and the least control over Cloud."
      },
      {
        "text": "Cloud, Configuration, Container, and Code",
        "correct": false,
        "rationale": "Configuration is not one of the 4 C's."
      },
      {
        "text": "Code, Clusters, Containers, and Cloud",
        "correct": false,
        "rationale": "These are the 4 C's, but they are in the wrong order. The user has more control over Containers than Cloud."
      },
      {
        "text": "Cloud, Clusters, Containers, and Code",
        "correct": false,
        "rationale": "These are the 4 C's, but they are in the wrong order. Cloud is the layer the user has least control over."
      }
    ]
  },
  {
    "id": 58,
    "question": "What does Prometheus do?",
    "answers": [
      {
        "text": "Collect metric data.",
        "correct": true,
        "rationale": "Prometheus collects metric data about applications and systems."
      },
      {
        "text": "Automatically scale applications.",
        "correct": false,
        "rationale": "Prometheus does not provide autoscaling."
      },
      {
        "text": "Deploy applications to Kubernetes.",
        "correct": false,
        "rationale": "Prometheus is not a deployment tool."
      },
      {
        "text": "Manage Kubernetes using a Git repository.",
        "correct": false,
        "rationale": "GitOps tools do this, but not Prometheus."
      }
    ]
  },
  {
    "id": 59,
    "question": "Which Kubernetes authentication method uses JSON Web Tokens (JWTs)?",
    "answers": [
      {
        "text": "OpenID Connect",
        "correct": true,
        "rationale": "OpenID Connect allows you to use JWTs, which can potentially be signed by external identity providers."
      },
      {
        "text": "Client certificates",
        "correct": false,
        "rationale": "Client certificate authentication uses x509 certificates, not JWTs."
      },
      {
        "text": "Anonymous",
        "correct": false,
        "rationale": "This authentication method skips authentication entirely."
      },
      {
        "text": "Bearer token",
        "correct": false,
        "rationale": "Bearer token authentication uses bearer tokens, not JWTs."
      }
    ]
  },
  {
    "id": 60,
    "question": "You need to create a Deployment called turtles with the container image shell:1.0.0 and 4 replicas. Which of the following commands would allow you to do this?",
    "answers": [
      {
        "text": "kubectl create deploy turtles --image=shell:1.0.0 --replicas=4",
        "correct": true,
        "rationale": "This command correctly sets the Deployment name, image, and replica count."
      },
      {
        "text": "kubectl create replicas 4 --deploy=turtles --image=shell:1.0.0",
        "correct": false,
        "rationale": "kubectl create replicas is not a valid command."
      },
      {
        "text": "kubectl create deploy turtles --image=shell:1.0.0 --count=4",
        "correct": false,
        "rationale": "The flag to specify the number of replicas is --replicas, not --count."
      },
      {
        "text": "kubectl create deploy turtles=shell:1.0.0 --replicas=4",
        "correct": false,
        "rationale": "The --image tag is needed to specify the image."
      }
    ]
  },
  {
    "id": 61,
    "question": "What is autoscaling?",
    "answers": [
      {
        "text": "Automatically adding or removing compute resources as needed",
        "correct": true,
        "rationale": "Autoscaling means automatically scaling up or down in response to real-time usage data."
      },
      {
        "text": "Automatically assigning workloads to nodes in a cluster",
        "correct": false,
        "rationale": "This is a feature of container orchestration. It is not directly related to autoscaling."
      },
      {
        "text": "Automatically repairing broken application instances",
        "correct": false,
        "rationale": "This refers to self-healing systems, not autoscaling."
      },
      {
        "text": "Automatically measuring resource usage",
        "correct": false,
        "rationale": "Autoscaling involves more than just measuring usage. It responds to resource usage in real time."
      }
    ]
  },
  {
    "id": 62,
    "question": "Which part of a Kubernetes cluster is responsible for managing the cluster?",
    "answers": [
      {
        "text": "Control plane",
        "correct": true,
        "rationale": "The control plane manages the cluster."
      },
      {
        "text": "etcd",
        "correct": false,
        "rationale": "etcd provides object storage for the control plane, but by itself, it does not manage the cluster."
      },
      {
        "text": "Cluster manager",
        "correct": false,
        "rationale": "This is not part of a Kubernetes cluster."
      },
      {
        "text": "Worker node",
        "correct": false,
        "rationale": "Worker nodes run workloads. They do not manage the cluster."
      }
    ]
  },
  {
    "id": 63,
    "question": "Which of the following statements about OPA Gatekeeper is true?",
    "answers": [
      {
        "text": "You can use it outside Kubernetes.",
        "correct": true,
        "rationale": "OPA Gatekeeper is a separate tool that can function outside of Kubernetes."
      },
      {
        "text": "It allows you to create your own custom resource types.",
        "correct": false,
        "rationale": "CustomResourceDefinitions do this, not OPA Gatekeeper."
      },
      {
        "text": "It replaces Deployments with a more secure feature set.",
        "correct": false,
        "rationale": "OPA Gatekeeper does not replace Deployments and does not need to."
      },
      {
        "text": "It allows you to use JSON Web Tokens (JWTs) to authenticate users.",
        "correct": false,
        "rationale": "OpenID Connect can do this, but not OPA Gatekeeper."
      }
    ]
  },
  {
    "id": 64,
    "question": "Which of the following commands will create a Deployment with three replicas?",
    "answers": [
      {
        "text": "kubectl create deploy my-dep --image=nginx:stable --replicas=3",
        "correct": true,
        "rationale": "This command will correctly create a Deployment with three replicas."
      },
      {
        "text": "kubectl deploy create my-dep --image=nginx:stable --replicas=3",
        "correct": false,
        "rationale": "create should be before deploy."
      },
      {
        "text": "kubectl create deploy my-dep --image=nginx:stable -p 3",
        "correct": false,
        "rationale": "-p is not the correct flag to specify the number of replicas."
      },
      {
        "text": "kubectl create deploy my-dep --image=nginx:stable --count=3",
        "correct": false,
        "rationale": "--count is not the correct flag to specify the number of replicas."
      }
    ]
  },
  {
    "id": 65,
    "question": "What type of interface is the Kubernetes API?",
    "answers": [
      {
        "text": "HTTP",
        "correct": true,
        "rationale": "The Kubernetes API is an HTTP interface."
      },
      {
        "text": "JSON",
        "correct": false,
        "rationale": "The API can use JSON as a data format, but this does not describe what type of interface it is."
      },
      {
        "text": "GUI",
        "correct": false,
        "rationale": "The Kubernetes API does not include a GUI interface."
      },
      {
        "text": "WebSocket",
        "correct": false,
        "rationale": "The Kubernetes API does not use WebSocket."
      }
    ]
  },
  {
    "id": 66,
    "question": "Which Kubernetes authentication method involves using x509 certificates to authenticate a user?",
    "answers": [
      {
        "text": "Client Certificates",
        "correct": true,
        "rationale": "Client Certificate authentication uses x509 certificates."
      },
      {
        "text": "Basic",
        "correct": false,
        "rationale": "The API server does not support basic authentication by default."
      },
      {
        "text": "OpenID Connect",
        "correct": false,
        "rationale": "OpenId Connect does not use x509 certificates."
      },
      {
        "text": "Anonymous",
        "correct": false,
        "rationale": "This authentication method skips authentication entirely."
      }
    ]
  },
  {
    "id": 67,
    "question": "What are the two major components of a service mesh?",
    "answers": [
      {
        "text": "Control plane and service proxy",
        "correct": true,
        "rationale": "A typical service mesh uses a control plane to control the mesh and a service proxy to monitor and manage traffic."
      },
      {
        "text": "Data plane and service proxy",
        "correct": false,
        "rationale": "These terms are sometimes used to refer to the same component."
      },
      {
        "text": "Sidecar and Web UI",
        "correct": false,
        "rationale": "The major components can include these items, but by themselves, they are not the main components of a Service Mesh system."
      },
      {
        "text": "Control plane and worker nodes",
        "correct": false,
        "rationale": "These are major components of a Kubernetes cluster, but not a service mesh."
      }
    ]
  },
  {
    "id": 68,
    "question": "Which of the following is NOT part of what makes CI/CD \"continuous\"?",
    "answers": [
      {
        "text": "Container orchestration",
        "correct": true,
        "rationale": "CI/CD is not specific to containers and does not require container orchestration."
      },
      {
        "text": "Automated processes",
        "correct": false,
        "rationale": "Automated processes are a big part of the \"continuous\" aspect of CI/CD."
      },
      {
        "text": "Frequent deployments",
        "correct": false,
        "rationale": "Frequent deployments are a big part of the \"continuous\" aspect of CI/CD."
      },
      {
        "text": "Incremental changes",
        "correct": false,
        "rationale": "Incremental changes are a big part of the \"continuous\" aspect of CI/CD."
      }
    ]
  },
  {
    "id": 69,
    "question": "When does scheduling occur?",
    "answers": [
      {
        "text": "When a new Pod is created that has not been assigned to a Node",
        "correct": true,
        "rationale": "Scheduling occurs whenever a new Pod is created that has not yet been assigned to a Node."
      },
      {
        "text": "Once every five minutes",
        "correct": false,
        "rationale": "Scheduling occurs whenever new Pods are created."
      },
      {
        "text": "When a user initiates a scheduling task",
        "correct": false,
        "rationale": "Scheduling does not need to be triggered by a user."
      },
      {
        "text": "When a Pod is deleted",
        "correct": false,
        "rationale": "Scheduling does not need to occur when a Pod is deleted."
      }
    ]
  },
  {
    "id": 70,
    "question": "You have three Nodes in a cluster, and you want to run exactly one replica of a Pod on each Node. You also want to automatically create a replica on any new Nodes when they are added. Which Kubernetes resource should you use?",
    "answers": [
      {
        "text": "DaemonSet",
        "correct": true,
        "rationale": "A DaemonSet runs replicas on all (or just some) Nodes in the cluster."
      },
      {
        "text": "Deployment",
        "correct": false,
        "rationale": "A Deployment does not tie replicas to Nodes."
      },
      {
        "text": "StatefulSet",
        "correct": false,
        "rationale": "A StatefulSet does not tie replicas to Nodes."
      },
      {
        "text": "NodeSet",
        "correct": false,
        "rationale": "This is not a valid Kubernetes resource by default."
      }
    ]
  },
  {
    "id": 71,
    "question": "What is vertical scaling?",
    "answers": [
      {
        "text": "Adding resources to existing apps and servers",
        "correct": true,
        "rationale": "Vertical scaling involves adding resources to existing instances."
      },
      {
        "text": "Running load tests to gauge application performance",
        "correct": false,
        "rationale": "Load testing may be part of making scaling decisions, but it is a different concept from vertical scaling."
      },
      {
        "text": "Monitoring response times to gauge the need for resources",
        "correct": false,
        "rationale": "This may be part of making scaling decisions, but it is a different concept from vertical scaling."
      },
      {
        "text": "Adding additional replicas of apps and servers",
        "correct": false,
        "rationale": "This describes horizontal scaling."
      }
    ]
  },
  {
    "id": 72,
    "question": "What does scheduling mean in Kubernetes?",
    "answers": [
      {
        "text": "Assigning a Pod to a Node",
        "correct": true,
        "rationale": "Scheduling refers to the process of assigning Pods to Nodes."
      },
      {
        "text": "Running a CronJob at the specified time",
        "correct": false,
        "rationale": "Kubernetes scheduling does not refer to a CronJob schedule."
      },
      {
        "text": "Setting a specific maintenance window for a Node",
        "correct": false,
        "rationale": "Kubernetes scheduling does not deal with Node maintenance."
      },
      {
        "text": "Setting an automated task to run in the future",
        "correct": false,
        "rationale": "Kubernetes scheduling does not refer to task scheduling."
      }
    ]
  },
  {
    "id": 73,
    "question": "What is GitOps?",
    "answers": [
      {
        "text": "Using Git to manage infrastructure",
        "correct": true,
        "rationale": "GitOps treats a Git repository as a source of truth and uses data stored in Git to implement changes to infrastructure, such as a Kubernetes cluster."
      },
      {
        "text": "Using Git to monitor applications",
        "correct": false,
        "rationale": "GitOps does not involve application monitoring."
      },
      {
        "text": "Managing network communication using proxies to provide additional features",
        "correct": false,
        "rationale": "This describes a service mesh, not GitOps."
      },
      {
        "text": "Using Git to manage application code",
        "correct": false,
        "rationale": "Git is used to manage application code, but this is not what GitOps is."
      }
    ]
  },
  {
    "id": 74,
    "question": "Which tool can help you build useful visual representations of Prometheus data?",
    "answers": [
      {
        "text": "Grafana",
        "correct": true,
        "rationale": "Grafana allows you to build dashboards and visualizations for Prometheus data."
      },
      {
        "text": "Prometheus Graph Utility",
        "correct": false,
        "rationale": "This is not the name of a real Prometheus tool."
      },
      {
        "text": "Rook",
        "correct": false,
        "rationale": "Rook provides storage orchestration. It is not a data visualization tool."
      },
      {
        "text": "Flux",
        "correct": false,
        "rationale": "Flux is a GitOps tool, not a data visualization tool."
      }
    ]
  },
  {
    "id": 75,
    "question": "What Kubernetes object allows you create your own custom resource types?",
    "answers": [
      {
        "text": "CustomResourceDefinition",
        "correct": true,
        "rationale": "A CustomResourceDefinition allows you to create your own custom resource types."
      },
      {
        "text": "Resource",
        "correct": false,
        "rationale": "This is not a default Kubernetes object."
      },
      {
        "text": "CustomResource",
        "correct": false,
        "rationale": "This is not a default Kubernetes object."
      },
      {
        "text": "StatefulSet",
        "correct": false,
        "rationale": "A StatefulSet manages stateful Pods. It does not allow you to create custom resource types."
      }
    ]
  },
  {
    "id": 76,
    "question": "You have a large batch job running in Kubernetes on a schedule. It requires a large amount of resources to run. What tool could you use to save money by adding temporary cluster Nodes only when this batch job is running?",
    "answers": [
      {
        "text": "Cluster Autoscaler",
        "correct": true,
        "rationale": "Cluster Autoscaler could be used to scale up the cluster temporarily in order to run the batch job."
      },
      {
        "text": "Horizontal Pod Autoscaler",
        "correct": false,
        "rationale": "This tool cannot add Nodes to the cluster. It can only add additional replica Pods."
      },
      {
        "text": "Argo CD",
        "correct": false,
        "rationale": "Argo CD is a GitOps tool. It would not be able to scale up the cluster automatically."
      },
      {
        "text": "OPA Gateway",
        "correct": false,
        "rationale": "OPA Gateway is a policy management and enforcement tool. It would not be able to scale up the cluster automatically."
      }
    ]
  },
  {
    "id": 77,
    "question": "What is the Kubernetes agent that runs on each worker Node?",
    "answers": [
      {
        "text": "kubelet",
        "correct": true,
        "rationale": "kubelet is the Node agent for Kubernetes."
      },
      {
        "text": "containerd",
        "correct": false,
        "rationale": "containerd is a container runtime, not the Kubernetes agent."
      },
      {
        "text": "kube-proxy",
        "correct": false,
        "rationale": "kube-proxy runs on each worker Node, but it is not the Kubernetes agent."
      },
      {
        "text": "CRI-O",
        "correct": false,
        "rationale": "CRI-O is a container runtime, not the Kubernetes agent."
      }
    ]
  },
  {
    "id": 78,
    "question": "Which of the following is a tool that monitors Kubernetes manifests stored in a Git repository and implements changes to those files in the cluster?",
    "answers": [
      {
        "text": "Flux",
        "correct": true,
        "rationale": "Flux is a GitOps tool that uses files in a Git repository to manage Kubernetes objects."
      },
      {
        "text": "Controller manager",
        "correct": false,
        "rationale": "The controller manager is part of the Kubernetes control plane. It does not monitor a Git repository."
      },
      {
        "text": "kubectl",
        "correct": false,
        "rationale": "kubectl can manage cluster objects, but it does not monitor a Git repository."
      },
      {
        "text": "etcd",
        "correct": false,
        "rationale": "etcd stores Kubernetes objects for the Kubernetes API, but it does not monitor a Git repository."
      }
    ]
  },
  {
    "id": 79,
    "question": "What piece of software is directly responsible for actually running containers?",
    "answers": [
      {
        "text": "Container runtime",
        "correct": true,
        "rationale": "A container runtime is the software that runs containers."
      },
      {
        "text": "Rook",
        "correct": false,
        "rationale": "Rook handles storage orchestration. It does not execute containers."
      },
      {
        "text": "Scheduler",
        "correct": false,
        "rationale": "Scheduler only assigns workloads to a Node. It does not execute them."
      },
      {
        "text": "kube-proxy",
        "correct": false,
        "rationale": "kube-proxy handles important networking functionality, but it does not execute containers."
      }
    ]
  },
  {
    "id": 80,
    "question": "What command can you use to display information about a resource type's available fields?",
    "answers": [
      {
        "text": "kubectl explain",
        "correct": true,
        "rationale": "This command displays documentation about a resource type, including its fields."
      },
      {
        "text": "kubectl get resource",
        "correct": false,
        "rationale": "kubectl get is used to retrieve individual objects or lists of objects."
      },
      {
        "text": "kubectl describe",
        "correct": false,
        "rationale": "This command displays details about a specific object, not a resource type."
      },
      {
        "text": "kubectl api-resources",
        "correct": false,
        "rationale": "This command lists the available resource types, but does not include information about their fields."
      }
    ]
  },
  {
    "id": 81,
    "question": "Your cluster is using most of its available resources, so you add some memory and more powerful CPUs to your Node servers. What type of scaling is this?",
    "answers": [
      {
        "text": "Vertical scaling",
        "correct": true,
        "rationale": "This involves adding resources to existing instances, which is vertical scaling."
      },
      {
        "text": "Horizontal scaling",
        "correct": false,
        "rationale": "Since this involves adding resources to existing instances, it is not horizontal scaling."
      },
      {
        "text": "Proportional scaling",
        "correct": false,
        "rationale": "This is not a type of proportional scaling, since nothing is said about the amount of scaling being calculated in proportion to existing amount of resources."
      },
      {
        "text": "Reverse scaling",
        "correct": false,
        "rationale": "This is not generally used as a term for a type of scaling."
      }
    ]
  },
  {
    "id": 82,
    "question": "What are the two primary goals of cloud native?",
    "answers": [
      {
        "text": "Rapid innovation and reliability",
        "correct": true,
        "rationale": "Cloud native is mainly focused on achieving rapid innovation while maintaining reliability."
      },
      {
        "text": "Low cost and stable progress",
        "correct": false,
        "rationale": "Low cost is good, but it is not one of the main goals of cloud native."
      },
      {
        "text": "Quick innovation and quick fixes",
        "correct": false,
        "rationale": "Cloud native seeks quick innovation, but it is more focused on preventing instability than quick fixes."
      },
      {
        "text": "Slow, careful innovation and stable systems",
        "correct": false,
        "rationale": "Cloud native seeks to achieve stability, but it also seeks to innovate rapidly."
      }
    ]
  },
  {
    "id": 83,
    "question": "Which Kubernetes resource creates Kubernetes Jobs?",
    "answers": [
      {
        "text": "CronJob",
        "correct": true,
        "rationale": "A CronJob creates Jobs on a schedule."
      },
      {
        "text": "Task",
        "correct": false,
        "rationale": "A Task is not a valid Kubernetes resource by default."
      },
      {
        "text": "JobDeployment",
        "correct": false,
        "rationale": "A JobDeployment is not a valid Kubernetes resource by default."
      },
      {
        "text": "JobFactory",
        "correct": false,
        "rationale": "This is not a valid Kubernetes resource by default."
      }
    ]
  },
  {
    "id": 84,
    "question": "What is etcd used for in Kubernetes?",
    "answers": [
      {
        "text": "Backend object storage for the Kubernetes API",
        "correct": true,
        "rationale": "etcd serves as a distributed object store that backs the Kubernetes API."
      },
      {
        "text": "Integration with cloud platforms",
        "correct": false,
        "rationale": "etcd does not provide cloud integration."
      },
      {
        "text": "Network routing for the cluster",
        "correct": false,
        "rationale": "etcd does not manage networking."
      },
      {
        "text": "Kubernetes API security",
        "correct": false,
        "rationale": "etcd does not provide security-related functionality to the API."
      }
    ]
  },
  {
    "id": 85,
    "question": "You have a containerized application, and you want to run a specific number of replica Pods for that application in Kubernetes. Which resource could you use to accomplish this?",
    "answers": [
      {
        "text": "ReplicaSet",
        "correct": true,
        "rationale": "A ReplicaSet allows you to specify a number of replica Pods, which the ReplicaSet manages automatically."
      },
      {
        "text": "DaemonSet",
        "correct": false,
        "rationale": "A DaemonSet's number of replicas is dependent on the number of Nodes. It would not be a good solution here."
      },
      {
        "text": "Pod",
        "correct": false,
        "rationale": "A Pod resource only runs a single Pod. It does not create or manage replicas."
      },
      {
        "text": "Job",
        "correct": false,
        "rationale": "A Job does not create replicas."
      }
    ]
  },
  {
    "id": 86,
    "question": "Which Service type exposes an application externally by listening on a port on each Node?",
    "answers": [
      {
        "text": "NodePort",
        "correct": true,
        "rationale": "A NodePort Service listens on a port on each Node in order to expose applications externally."
      },
      {
        "text": "ExternalPort",
        "correct": false,
        "rationale": "This is not a valid Service type."
      },
      {
        "text": "ClusterIP",
        "correct": false,
        "rationale": "A ClusterIP Service exposes internally, not externally."
      },
      {
        "text": "LoadBalancer",
        "correct": false,
        "rationale": "A LoadBalancer Service exposes externally, but it uses a cloud load balancer, not a port listening on each Node."
      }
    ]
  },
  {
    "id": 87,
    "question": "What command can you use to get documentation about a resource type from the command line?",
    "answers": [
      {
        "text": "kubectl explain",
        "correct": true,
        "rationale": "This command can be used to display documentation about a resource type."
      },
      {
        "text": "kubectl get",
        "correct": false,
        "rationale": "This command retrieves objects, but it does not retrieve documentation about resource types."
      },
      {
        "text": "kubeadm get-resource",
        "correct": false,
        "rationale": "This is not a valid command."
      },
      {
        "text": "kubectl api-resources",
        "correct": false,
        "rationale": "This command lists resource types, but it does not retrieve documentation about them."
      }
    ]
  },
  {
    "id": 88,
    "question": "What can you use to add new resource types to your cluster?",
    "answers": [
      {
        "text": "CustomResourceDefinition",
        "correct": true,
        "rationale": "A CustomResourceDefinition allows you to define your own resource types."
      },
      {
        "text": "CRI-O",
        "correct": false,
        "rationale": "CRI-O is a container runtime. It does not allow you to add resource types."
      },
      {
        "text": "Init Containers",
        "correct": false,
        "rationale": "Init containers allow you to run a container before a Pod starts up. It does not allow you to add resource types."
      },
      {
        "text": "Flux",
        "correct": false,
        "rationale": "Flux is a GitOps tool. It does not allow you to add resource types."
      }
    ]
  },
  {
    "id": 89,
    "question": "Which deployment strategy can you use with Kubernetes Deployments to deploy new code with zero downtime?",
    "answers": [
      {
        "text": "RollingUpdate",
        "correct": true,
        "rationale": "This strategy gradually replaces old replicas with new ones, rolling out new code with zero downtime."
      },
      {
        "text": "ZeroDowntime",
        "correct": false,
        "rationale": "This is not a valid deployment strategy name for Kubernetes Deployments."
      },
      {
        "text": "Recreate",
        "correct": false,
        "rationale": "This strategy recreates the Deployment, destroying all of the old replicas before creating new ones. This process results in downtime."
      },
      {
        "text": "BlueGreen",
        "correct": false,
        "rationale": "This is not a valid deployment strategy name for Kubernetes Deployments."
      }
    ]
  },
  {
    "id": 90,
    "question": "What is horizontal scaling?",
    "answers": [
      {
        "text": "Adding additional replicas of apps and servers",
        "correct": true,
        "rationale": "Horizontal scaling involves adding more instances."
      },
      {
        "text": "Moving workloads from one server to another",
        "correct": false,
        "rationale": "This is simply moving a workload to a different set of resources. It is not a form of scaling."
      },
      {
        "text": "Creating a Deployment",
        "correct": false,
        "rationale": "Deployments can be used to scale horizontally in Kubernetes, but creating a Deployment is not by itself the practice of horizontal scaling."
      },
      {
        "text": "Adding resources to existing apps and servers",
        "correct": false,
        "rationale": "This is vertical scaling."
      }
    ]
  },
  {
    "id": 91,
    "question": "What is a sidecar?",
    "answers": [
      {
        "text": "An additional container running in a Pod alongside the main container",
        "correct": true,
        "rationale": "A sidecar container runs alongside the main container and offers additional functionality."
      },
      {
        "text": "An external piece of software that monitors a container's activity",
        "correct": false,
        "rationale": "The sidecar pattern specifically refers to a setup where helper software runs inside a container alongside the main container."
      },
      {
        "text": "A helper program that assists you in managing your Kubernetes cluster",
        "correct": false,
        "rationale": "Sidecars provide additional functionality to your main application containers, they do not generally assist in managing the cluster."
      },
      {
        "text": "A separate Pod that is set up to provide additional functionality to another Pod",
        "correct": false,
        "rationale": "A sidecar shares the same Pod as its main container."
      }
    ]
  },
  {
    "id": 92,
    "question": "If you run the following command:**\n`kubectl create deploy nginx-dep --image=nginx:stable --replicas=1` How many Pods will be created?\n\n- **1**  \n  (The --replicas flag specifies 1 replica.)\n- **Incorrect Answers:**\n  - None. This command will not result in Pods being created.\n    (Creating a Deployment with replicas will result in the creation of Pods.)\n  - 2\n    (This is not the number specified in the --replicas flag.)\n  - 3\n    (Three is not the number specified in the --replicas flag.)\n\n---\n\n\n**93) What command can be used to list all Kubernetes resource types?",
    "answers": [
      {
        "text": "kubectl api-resources",
        "correct": true,
        "rationale": "This command lists all of the available resource types in the cluster."
      },
      {
        "text": "kubectl get resources",
        "correct": false,
        "rationale": "Resource types are not the same as objects, so you cannot list them with kubectl get."
      },
      {
        "text": "kubectl list-resources",
        "correct": false,
        "rationale": "This is not a valid kubectl command."
      },
      {
        "text": "kubectl explain",
        "correct": false,
        "rationale": "This command can be used to display documentation for a resource type, but not to list all resource types."
      }
    ]
  },
  {
    "id": 94,
    "question": "What Kubernetes resource allows you to determine which Pods are isolated and which are non-isolated when it comes to networking?",
    "answers": [
      {
        "text": "NetworkPolicy",
        "correct": true,
        "rationale": "NetworkPolicy allows you to determine which Pods are isolated."
      },
      {
        "text": "kube-proxy",
        "correct": false,
        "rationale": "kube-proxy is not a Kubernetes resource."
      },
      {
        "text": "PodSecurityPolicy",
        "correct": false,
        "rationale": "This is a deprecated feature that does not directly affect Pod network isolation."
      },
      {
        "text": "Cluster Network",
        "correct": false,
        "rationale": "This is not a Kubernetes resource."
      }
    ]
  },
  {
    "id": 95,
    "question": "What is a container runtime?",
    "answers": [
      {
        "text": "Software that runs containers",
        "correct": true,
        "rationale": "A container runtime is the software responsible for running containers on a Node."
      },
      {
        "text": "A tool that assigns containers to Nodes",
        "correct": false,
        "rationale": "The Kubernetes scheduler assigns Pods (and their containers"
      },
      {
        "text": "The Kubernetes agent that runs on each Node",
        "correct": false,
        "rationale": "The Kubernetes agent is kubelet, not the container runtime."
      },
      {
        "text": "The amount of time since the container started up",
        "correct": false,
        "rationale": "A container runtime does not refer to the amount of time the container has been running."
      }
    ]
  },
  {
    "id": 96,
    "question": "In distributed system tracing, what is the term used to refer to a set of events all related to a single user request as it makes its way through the system?",
    "answers": [
      {
        "text": "Trace",
        "correct": true,
        "rationale": "A trace refers to the data related to events from a single request making its way through the whole system."
      },
      {
        "text": "Log",
        "correct": false,
        "rationale": "A log is the output data from a single component, not the data related to a single request."
      },
      {
        "text": "Span",
        "correct": false,
        "rationale": "A span focuses on the request as it passes through only a single component of the system, not the system as a whole."
      },
      {
        "text": "Distributed System",
        "correct": false,
        "rationale": "The distributed system is the system the user request is moving through. It is not the set of logged events related to a user request moving through that system."
      }
    ]
  },
  {
    "id": 97,
    "question": "Which of the following statements about NetworkPolicy is true?",
    "answers": [
      {
        "text": "A Pod can be isolated when it comes to incoming traffic, and non-isolated for outgoing traffic.",
        "correct": true,
        "rationale": "Incoming (ingress) and outgoing (egress) traffic are treated completely separately when it comes to NetworkPolicy."
      },
      {
        "text": "You can only have one NetworkPolicy per Pod.",
        "correct": false,
        "rationale": "Multiple NetworkPolicies can affect the same Pod."
      },
      {
        "text": "If a Pod is not selected by any NetworkPolicy, it is isolated by default.",
        "correct": false,
        "rationale": "Pods are non-isolated by default."
      },
      {
        "text": "When a Pod is isolated, only traffic specifically blocked by the NetworkPolicy will be blocked.",
        "correct": false,
        "rationale": "When a Pod is isolated, all traffic is blocked by default."
      }
    ]
  },
  {
    "id": 98,
    "question": "Which organizational persona creates SLAs, SLOs, and SLIs?",
    "answers": [
      {
        "text": "Site Reliability Engineer (SRE)",
        "correct": true,
        "rationale": "SREs create SLAs, SLOs, and SLIs to define and implement standards for application and infrastructure reliability."
      },
      {
        "text": "Security and Compliance Engineer",
        "correct": false,
        "rationale": "Security and compliance engineers do not create SLAs, SLOs, and SLIs. They set and enforce security and compliance standards."
      },
      {
        "text": "Ops",
        "correct": false,
        "rationale": "Ops engineers do not create SLAs, SLOs, and SLIs. They manage infrastructure."
      },
      {
        "text": "Developer",
        "correct": false,
        "rationale": "Developers do not create SLAs, SLOs, and SLIs. They write code."
      }
    ]
  },
  {
    "id": 99,
    "question": "What Kubernetes resource would you use to expose a set of replica Pods so that clients can use them?",
    "answers": [
      {
        "text": "Service",
        "correct": true,
        "rationale": "A Service can be used to expose a set of Pods."
      },
      {
        "text": "Deployment",
        "correct": false,
        "rationale": "A Deployment can only manage the replicas; it does not expose them."
      },
      {
        "text": "NetworkPolicy",
        "correct": false,
        "rationale": "A NetworkPolicy can only restrict network traffic. It cannot expose Pods."
      },
      {
        "text": "MicroService",
        "correct": false,
        "rationale": "This is not a Kubernetes resource."
      }
    ]
  },
  {
    "id": 100,
    "question": "What does the Kubernetes virtual cluster network do?",
    "answers": [
      {
        "text": "Allows Pods to communicate with each other transparently, even if they are on different Nodes",
        "correct": true,
        "rationale": "The virtual cluster network allows Pods to communicate without the need to be aware of Nodes."
      },
      {
        "text": "Allows Nodes in the cluster to communicate with one another",
        "correct": false,
        "rationale": "The regular network does this, not the virtual cluster network."
      },
      {
        "text": "Provides a directory of which Node each Pod is on so that they can look each other up",
        "correct": false,
        "rationale": "From a networking perspective, the virtual cluster network eliminates the need for Pods to know what Node any other Pod is on."
      },
      {
        "text": "Allows worker nodes to communicate with the control plane",
        "correct": false,
        "rationale": "The regular network will do this, not the virtual cluster network."
      }
    ]
  },
  {
    "id": 101,
    "question": "Which Kubernetes component is most directly responsible for integrating with cloud platforms?",
    "answers": [
      {
        "text": "Cloud controller manager",
        "correct": true,
        "rationale": "The cloud controller manager handles integration with cloud providers."
      },
      {
        "text": "kubectl",
        "correct": false,
        "rationale": "kubectl is not a component of a Kubernetes cluster, and it does not communicate with cloud providers directly."
      },
      {
        "text": "API server",
        "correct": false,
        "rationale": "The API server does not communicate with cloud providers directly."
      },
      {
        "text": "Controller manager",
        "correct": false,
        "rationale": "The controller manager does a wide variety of things, but it does not assign Pods to Nodes."
      }
    ]
  },
  {
    "id": 102,
    "question": "What is the practice of using observability to make data-driven decisions to save on cloud costs called?",
    "answers": [
      {
        "text": "FinOps",
        "correct": true,
        "rationale": "FinOps is all about using data to save money in the cloud."
      },
      {
        "text": "MoneyOps",
        "correct": false,
        "rationale": "This is not the term used to refer to data-driven cloud cost saving techniques."
      },
      {
        "text": "DevOps",
        "correct": false,
        "rationale": "DevOps refers to a culture of collaboration between Developers and Ops engineers, not data-driven decisions that lower cloud costs."
      },
      {
        "text": "Observability",
        "correct": false,
        "rationale": "Observability is all about data, but this term does not refer specifically to techniques related to saving cloud costs."
      }
    ]
  },
  {
    "id": 103,
    "question": "A new Pod is created. Then, the Pod is assigned to a Node. Which Kubernetes component was responsible for determining which Node to assign the Pod to?",
    "answers": [
      {
        "text": "Scheduler",
        "correct": true,
        "rationale": "The scheduler handles the process of assigning new Pods to Nodes."
      },
      {
        "text": "API Server",
        "correct": false,
        "rationale": "The API Server manages objects. It does not assign Pods to Nodes."
      },
      {
        "text": "kubelet",
        "correct": false,
        "rationale": "kubelet manages individual Nodes. It does not assign Pods to Nodes."
      },
      {
        "text": "Controller manager",
        "correct": false,
        "rationale": "The controller manager does a wide variety of things, but it does not assign Pods to Nodes."
      }
    ]
  },
  {
    "id": 104,
    "question": "Which Kubernetes resource can be used to run tasks according to a schedule?",
    "answers": [
      {
        "text": "CronJob",
        "correct": true,
        "rationale": "A CronJob creates Jobs to execute a task according to a schedule."
      },
      {
        "text": "ScheduledJob",
        "correct": false,
        "rationale": "This is not a valid Kubernetes resource by default."
      },
      {
        "text": "Job",
        "correct": false,
        "rationale": "A Job does not create other Jobs."
      },
      {
        "text": "StatefulSet",
        "correct": false,
        "rationale": "A StatefulSet manages stateful, continuous workloads. It does not create Jobs."
      }
    ]
  },
  {
    "id": 105,
    "question": "Which of the following statements is TRUE about a Service that has no selector?",
    "answers": [
      {
        "text": "Endpoints must be created manually.",
        "correct": true,
        "rationale": "When a Service has no selector, any endpoints must be manually created."
      },
      {
        "text": "A Service cannot be created without a selector.",
        "correct": false,
        "rationale": "You can create a Service with no selector."
      },
      {
        "text": "The Service cannot route to Pods.",
        "correct": false,
        "rationale": "The Service can route to Pods if manual endpoints are created."
      },
      {
        "text": "The Service can only be an ExternalName Service.",
        "correct": false,
        "rationale": "Services with no selector can have any Service type."
      }
    ]
  },
  {
    "id": 106,
    "question": "Which part of a Kubernetes cluster includes components such as kubelet, kube-proxy, and a container runtime?",
    "answers": [
      {
        "text": "Worker node",
        "correct": true,
        "rationale": "Worker nodes include all of the listed components."
      },
      {
        "text": "Cloud",
        "correct": false,
        "rationale": "Kubernetes can run in the cloud, but cloud is not considered a part of the cluster from an architectural perspective."
      },
      {
        "text": "Container",
        "correct": false,
        "rationale": "Containers run workloads in Kubernetes. They do not include the listed components."
      },
      {
        "text": "Control plane",
        "correct": false,
        "rationale": "The control plane does not include the listed components."
      }
    ]
  },
  {
    "id": 107,
    "question": "Which component manages network routing rules on each Node?",
    "answers": [
      {
        "text": "kube-proxy",
        "correct": true,
        "rationale": "kube-proxy implements some of the functionality of Kubernetes Services by managing local network routing rules on each Node."
      },
      {
        "text": "Kubernetes CRI",
        "correct": false,
        "rationale": "Kubernetes CRI is a standard interface for containers. It does not handle Node routing rules."
      },
      {
        "text": "kubelet",
        "correct": false,
        "rationale": "kubelet is the Kubernetes agent on each Node. It does not handle Node routing rules."
      },
      {
        "text": "dockershim",
        "correct": false,
        "rationale": "dockershim does not manage network routing rules on Nodes."
      }
    ]
  },
  {
    "id": 108,
    "question": "What is SMI?",
    "answers": [
      {
        "text": "A Kubernetes standard for service meshes",
        "correct": true,
        "rationale": "SMI stands for Service Mesh Interface. It is a standard interface for Kubernetes service meshes."
      },
      {
        "text": "A tool that syncs a Git repository with your cluster",
        "correct": false,
        "rationale": "This describes GitOps tools. SMI is not a GitOps tool."
      },
      {
        "text": "A service mesh tool that monitors response times",
        "correct": false,
        "rationale": "SMI is not a specific service mesh tool, but a standard for service meshes."
      },
      {
        "text": "A term for integrating multiple service meshes in the same cluster",
        "correct": false,
        "rationale": "SMI refers to a standard for service meshes, not integrations between them."
      }
    ]
  },
  {
    "id": 109,
    "question": "Which of the following is an example of a container runtime?",
    "answers": [
      {
        "text": "containerd",
        "correct": true,
        "rationale": "containerd is a container runtime."
      },
      {
        "text": "Rook",
        "correct": false,
        "rationale": "Rook is a storage orchestrator, not a container runtime."
      },
      {
        "text": "etcd",
        "correct": false,
        "rationale": "etcd is a data store, not a container runtime."
      },
      {
        "text": "Flux",
        "correct": false,
        "rationale": "Flux is a GitOps tool, not a container runtime."
      }
    ]
  },
  {
    "id": 110,
    "question": "You need to deploy some new code. Instead of replacing all Pods at the same time, thus creating downtime, you gradually replace them with the new Pods so that at least some replicas are always running. This results in a zero-downtime Deployment. What is this process called?",
    "answers": [
      {
        "text": "Rolling Update",
        "correct": true,
        "rationale": "A Rolling Update is the process of deploying new code gradually in a way that avoids downtime."
      },
      {
        "text": "Canary",
        "correct": false,
        "rationale": "A canary deployment deals with deploying new code to a small number of users for testing purposes. It does not refer to a gradual rollout geared toward avoiding downtime."
      },
      {
        "text": "Blue/Green",
        "correct": false,
        "rationale": "A Blue/Green deployment means running two versions of the code side-by-side for testing purposes. It does not refer to a gradual rollout geared toward avoiding downtime."
      },
      {
        "text": "Lift-and-Shift",
        "correct": false,
        "rationale": "Lift and shift refers to a way of moving infrastructure into the cloud. It does not refer to a deployment strategy."
      }
    ]
  },
  {
    "id": 111,
    "question": "The Kubernetes API uses a specific architectural style that defines how it communicates and interacts with cluster state representations. Which term best describes this architectural approach used by Kubernetes?",
    "answers": [
      {
        "text": "REST",
        "correct": true,
        "rationale": "The API uses REST or RESTful objects to represent state."
      },
      {
        "text": "JSON",
        "correct": false,
        "rationale": "The API can use JSON as a data format, but this does not ultimately describe what type of objects it uses to represent state."
      },
      {
        "text": "YAML",
        "correct": false,
        "rationale": "The API can use YAML as a data format, but this does not ultimately describe what type of objects it uses to represent state."
      },
      {
        "text": "etcd",
        "correct": false,
        "rationale": "etcd is used to store objects, but this does not determine what type of objects the API uses."
      }
    ]
  },
  {
    "id": 112,
    "question": "Which of the following Kubernetes resources can utilize the field immutable: true?",
    "answers": [
      {
        "text": "ConfigMap",
        "correct": true,
        "rationale": "You can use immutable: true with a ConfigMap to prevent the ConfigMap data from being edited."
      },
      {
        "text": "Pod",
        "correct": false,
        "rationale": "A Pod does not include a field called immutable."
      },
      {
        "text": "NetworkPolicy",
        "correct": false,
        "rationale": "A NetworkPolicy does not include a field called immutable."
      },
      {
        "text": "Deployment",
        "correct": false,
        "rationale": "A Deployment does not include a field called immutable."
      }
    ]
  },
  {
    "id": 113,
    "question": "Which of the following generally describes the Cloud Native Computing Foundation (CNCF) decision-making process?",
    "answers": [
      {
        "text": "Public discussion and voting",
        "correct": true,
        "rationale": "CNCF make decisions by discussing issues publicly and voting on them."
      },
      {
        "text": "Quarterly whitepapers",
        "correct": false,
        "rationale": "CNCF-affiliated technology groups can issue whitepapers, but this is not part of the decision-making process."
      },
      {
        "text": "Closed sessions and edicts",
        "correct": false,
        "rationale": "CNCF generally makes discussions public and votes on decisions."
      },
      {
        "text": "Technology tribunals",
        "correct": false,
        "rationale": "The CNCF makes decisions more through discussing issues publicly and voting on decisions."
      }
    ]
  },
  {
    "id": 114,
    "question": "Which Kubernetes component is used by the other control plane components to communicate with each other?",
    "answers": [
      {
        "text": "API server",
        "correct": true,
        "rationale": "The control plane components all communicate through the API server."
      },
      {
        "text": "Controller manager",
        "correct": false,
        "rationale": "The controller manager is part of the Kubernetes control plane. It does not monitor a Git repository."
      },
      {
        "text": "kubelet",
        "correct": false,
        "rationale": "kubelet is a worker Node component. Control plane components do not communicate with each other through it."
      },
      {
        "text": "kubectl",
        "correct": false,
        "rationale": "kubectl is a command line tool. Control plane components do not use it."
      }
    ]
  },
  {
    "id": 115,
    "question": "What does the Cloud Native Computing Foundation (CNCF) do?",
    "answers": [
      {
        "text": "Promote cloud native technology",
        "correct": true,
        "rationale": "CNCF promotes cloud native technology and open-source projects."
      },
      {
        "text": "Govern which technologies can be used in the cloud",
        "correct": false,
        "rationale": "CNCF merely promotes technologies. It does not exercise control over what technologies can be used."
      },
      {
        "text": "Promote cloud vendors",
        "correct": false,
        "rationale": "CNCF is vendor-neutral."
      },
      {
        "text": "Provide consulting services for those seeking to get into the cloud",
        "correct": false,
        "rationale": "CNCF does not provide consulting."
      }
    ]
  },
  {
    "id": 116,
    "question": "What is the name for a special Service that has no cluster IP address?",
    "answers": [
      {
        "text": "Headless Service",
        "correct": true,
        "rationale": "A headless Service is a special Service that has no cluster IP address."
      },
      {
        "text": "Broken Service",
        "correct": false,
        "rationale": "A service with no cluster IP address is not necessarily considered broken."
      },
      {
        "text": "Incomplete Service",
        "correct": false,
        "rationale": "This is not terminology for a type of Service in Kubernetes."
      },
      {
        "text": "NodePort Service",
        "correct": false,
        "rationale": "A NodePort Service has a cluster IP address."
      }
    ]
  },
  {
    "id": 117,
    "question": "What is the name for a special Service that has no cluster IP address?",
    "answers": [
      {
        "text": "Headless Service",
        "correct": true,
        "rationale": "A headless Service is a special Service that has no cluster IP address."
      },
      {
        "text": "Broken Service",
        "correct": false,
        "rationale": "A service with no cluster IP address is not necessarily considered broken."
      },
      {
        "text": "Incomplete Service",
        "correct": false,
        "rationale": "This is not terminology for a type of Service in Kubernetes."
      },
      {
        "text": "NodePort Service",
        "correct": false,
        "rationale": "A NodePort Service has a cluster IP address."
      }
    ]
  },
  {
    "id": 118,
    "question": "What is the reference implementation for the OCI runtime spec?",
    "answers": [
      {
        "text": "runc",
        "correct": true,
        "rationale": "runc is the reference implementation for the OCI runtime spec."
      },
      {
        "text": "dockershim",
        "correct": false,
        "rationale": "dockershim is a deprecated compatibility bridge between Docker and CRI. It is not the reference implementation of the OCI runtime spec."
      },
      {
        "text": "containerd",
        "correct": false,
        "rationale": "containerd utilizes the reference implementation, but it is not itself the reference implementation."
      },
      {
        "text": "CRI-O",
        "correct": false,
        "rationale": "CRI-O is a container runtime, but it is not the OCI runtime reference implementation."
      }
    ]
  },
  {
    "id": 119,
    "question": "What component is responsible for assigning new Pods to available Nodes?",
    "answers": [
      {
        "text": "Scheduler",
        "correct": true,
        "rationale": "The scheduler handles assigning Pods to Nodes."
      },
      {
        "text": "API Server",
        "correct": false,
        "rationale": "The API Server manages objects. It does not assign Pods to Nodes."
      },
      {
        "text": "kubelet",
        "correct": false,
        "rationale": "kubelet manages individual Nodes. It does not assign Pods to Nodes."
      },
      {
        "text": "Controller manager",
        "correct": false,
        "rationale": "The controller manager does a wide variety of things, but it does not assign Pods to Nodes."
      }
    ]
  },
  {
    "id": 120,
    "question": "Which part of a Kubernetes cluster includes the API server, scheduler, and etcd?",
    "answers": [
      {
        "text": "Control plane",
        "correct": true,
        "rationale": "The control plane includes all of the listed components."
      },
      {
        "text": "Data store",
        "correct": false,
        "rationale": "etcd alone serves as the data store. The data store does not include the other components."
      },
      {
        "text": "API layer",
        "correct": false,
        "rationale": "This is not a term used to refer to part of the Kubernetes architecture, other than possibly the Kubernetes API alone."
      },
      {
        "text": "Worker node",
        "correct": false,
        "rationale": "Worker Nodes do not include any of the listed components."
      }
    ]
  }
];
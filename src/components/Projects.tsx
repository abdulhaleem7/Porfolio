'use client';

import React, { useState } from 'react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projects = [
    {
      title: "AltConnect - Social Finance Banking",
      description: "A social-finance networking app for Sterling Bank that merges digital banking with community engagement, supporting wallet operations, events, and social features.",
      technologies: ["ASP.NET Core", "Angular", "SQL Server", "Azure Blob Storage", "JWT Auth", "Paystack", "Flutterwave"],
      features: [
        "Wallet funding and transfers via Paystack & Flutterwave",
        "Community and event management system",
        "Real-time chat and social feed modules",
        "RBAC admin dashboard for managing events and donations",
        "Secure payment processing and transaction management"
      ],
      codeSnippet: `// Payment Processing Service
public class PaymentService : IPaymentService
{
    private readonly IPaystackService _paystack;
    private readonly IFlutterwaveService _flutterwave;
    private readonly IWalletRepository _walletRepository;
    
    public async Task<PaymentResult> ProcessWalletFunding(
        WalletFundingRequest request)
    {
        var wallet = await _walletRepository.GetByUserIdAsync(request.UserId);
        
        var paymentResult = request.Provider switch
        {
            PaymentProvider.Paystack => await _paystack.ProcessPayment(request),
            PaymentProvider.Flutterwave => await _flutterwave.ProcessPayment(request),
            _ => throw new NotSupportedException($"Provider {request.Provider} not supported")
        };
        
        if (paymentResult.IsSuccessful)
        {
            await _walletRepository.CreditWalletAsync(wallet.Id, request.Amount);
        }
        
        return paymentResult;
    }
}`,
      github: "https://github.com/abdulhaleem7",
      demo: "https://altconnect.ng",
      role: "Senior Software Engineer"
    },
    {
      title: "WasteBanc Admin Portal",
      description: "A comprehensive recycling management system enabling admins to manage waste categories, assign agents, approve pickups, and monitor evacuation requests for sustainable waste collection.",
      technologies: ["ASP.NET Core Web API", "Angular", "PostgreSQL", "Serilog", "Docker", "JWT"],
      features: [
        "Request approval workflows with role-based permissions",
        "Comprehensive audit trail and logging system",
        "Advanced data analytics for recycling metrics",
        "Agent and waste category management",
        "Real-time monitoring and notification system"
      ],
      codeSnippet: `// Waste Pickup Request Approval System
[ApiController]
[Route("api/[controller]")]
[Authorize(Roles = "Admin,Supervisor")]
public class PickupRequestController : ControllerBase
{
    private readonly IPickupRequestService _pickupService;
    private readonly IAuditLogger _auditLogger;
    
    [HttpPost("{id}/approve")]
    public async Task<IActionResult> ApprovePickupRequest(
        int id, [FromBody] ApprovalRequest request)
    {
        var user = User.Identity.Name;
        
        var result = await _pickupService.ApproveRequestAsync(
            id, request.Comments, user);
        
        await _auditLogger.LogAsync(new AuditEntry
        {
            Action = "PickupRequestApproved",
            UserId = user,
            EntityId = id,
            Timestamp = DateTime.UtcNow,
            Details = request.Comments
        });
        
        return Ok(result);
    }
}`,
      github: "https://github.com/abdulhaleem7",
      demo: "https://admin.wastebanc.ng/",
      role: "Backend Engineer"
    },
    {
      title: "Hajj Savings Platform",
      description: "A secure fintech savings platform for Hajj pilgrims with automated savings plans, multi-portal access, and comprehensive financial management features.",
      technologies: ["ASP.NET Core", "PostgreSQL", "Entity Framework Core", "Serilog", "Azure App Service", "Redis Cache"],
      features: [
        "OTP-secured registration and authentication system",
        "Automated debit mandates and recurring savings plans",
        "Multi-role access (Customer, Admin, State Admin)",
        "Encrypted transaction data with comprehensive audit logs",
        "Advanced reporting dashboard with financial analytics"
      ],
      codeSnippet: `// Automated Savings Plan Service
public class SavingsPlanService : ISavingsPlanService
{
    private readonly ISavingsRepository _repository;
    private readonly IPaymentProcessor _paymentProcessor;
    private readonly INotificationService _notificationService;
    
    [Hangfire.AutomaticRetry(Attempts = 3)]
    public async Task ProcessRecurringSavings(int planId)
    {
        var plan = await _repository.GetSavingsPlanAsync(planId);
        
        if (!plan.IsActive || plan.NextDebitDate > DateTime.UtcNow)
            return;
            
        var debitResult = await _paymentProcessor.ProcessDebitMandateAsync(
            plan.UserId, plan.Amount, plan.DebitMandateReference);
        
        if (debitResult.IsSuccessful)
        {
            await _repository.RecordSavingsContributionAsync(new SavingsContribution
            {
                PlanId = planId,
                Amount = plan.Amount,
                TransactionReference = debitResult.TransactionId,
                DateCreated = DateTime.UtcNow
            });
            
            plan.UpdateNextDebitDate();
            await _repository.UpdateSavingsPlanAsync(plan);
            
            await _notificationService.SendSavingsConfirmationAsync(plan.UserId, plan.Amount);
        }
    }
}`,
      github: "https://github.com/abdulhaleem7",
      demo: "https://hajjsavingsfe-qa.sterling.ng/",
      adminDemo: "https://hajjsavingadminsfe-qa.sterling.ng/",
      role: "Lead Backend Engineer"
    },
    {
      title: "Cummins Engine Management System",
      description: "A comprehensive engine records management system for Cummins, ensuring efficient tracking, maintenance scheduling, and performance monitoring of engine assets.",
      technologies: ["ASP.NET Core", "C#", "SQL Server", "Entity Framework Core", "Azure App Service", "RESTful APIs"],
      features: [
        "Complete engine inventory and records management",
        "Maintenance scheduling and tracking system",
        "Performance monitoring and analytics dashboard",
        "Secure user authentication and role-based access",
        "Comprehensive reporting and data export capabilities"
      ],
      codeSnippet: `// Engine Records Management Service
public class EngineManagementService : IEngineManagementService
{
    private readonly IEngineRepository _engineRepository;
    private readonly IMaintenanceScheduler _maintenanceScheduler;
    private readonly ILogger<EngineManagementService> _logger;
    
    public async Task<EngineRecord> CreateEngineRecordAsync(CreateEngineRequest request)
    {
        var engineRecord = new EngineRecord
        {
            SerialNumber = request.SerialNumber,
            Model = request.Model,
            ManufactureDate = request.ManufactureDate,
            Status = EngineStatus.Active,
            CreatedAt = DateTime.UtcNow
        };
        
        await _engineRepository.AddAsync(engineRecord);
        await _maintenanceScheduler.ScheduleMaintenanceAsync(engineRecord.Id);
        
        _logger.LogInformation("Engine record created: {SerialNumber}", request.SerialNumber);
        return engineRecord;
    }
}`,
      github: "https://github.com/abdulhaleem7",
      demo: "https://epregister.azurewebsites.net/",
      role: ".NET Backend Engineer"
    },
    {
      title: "Caleb University Management Portal",
      description: "A comprehensive university management system designed to streamline academic operations, student records, course management, and administrative processes for Caleb University.",
      technologies: ["ASP.NET Core", "C#", "SQL Server", "Entity Framework Core", "Bootstrap", "jQuery", "Azure"],
      features: [
        "Student enrollment and academic records management",
        "Course scheduling and curriculum management",
        "Faculty and staff administration system",
        "Fee management and payment processing",
        "Academic transcript and certification generation",
        "Multi-role dashboard for students, faculty, and administrators"
      ],
      codeSnippet: `// Student Management Service
public class StudentManagementService : IStudentManagementService
{
    private readonly IStudentRepository _studentRepository;
    private readonly ICourseRepository _courseRepository;
    private readonly ITranscriptService _transcriptService;
    
    public async Task<EnrollmentResult> EnrollStudentAsync(int studentId, int courseId)
    {
        var student = await _studentRepository.GetByIdAsync(studentId);
        var course = await _courseRepository.GetByIdAsync(courseId);
        
        if (!ValidateEnrollmentEligibility(student, course))
            return EnrollmentResult.Failed("Student not eligible for course");
            
        var enrollment = new Enrollment
        {
            StudentId = studentId,
            CourseId = courseId,
            EnrollmentDate = DateTime.UtcNow,
            Status = EnrollmentStatus.Active
        };
        
        await _studentRepository.AddEnrollmentAsync(enrollment);
        return EnrollmentResult.Success();
    }
}`,
      github: "https://github.com/abdulhaleem7",
      demo: "#",
      role: ".NET Backend Engineer"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-world backend solutions showcasing advanced C# .NET development and architectural patterns
          </p>
        </div>

        <div className="space-y-16">
          {(showAll ? projects : projects.slice(0, 2)).map((project, index) => (
            <div key={index} className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.role}
                      </span>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4 pt-4">
                    {project.demo !== "#" && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
                      >
                        {(project as any).adminDemo ? "Customer Portal" : "Live Demo"}
                      </a>
                    )}
                    {(project as any).adminDemo && (
                      <a 
                        href={(project as any).adminDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
                      >
                        Admin Portal
                      </a>
                    )}
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-400 text-sm">C#</span>
                  </div>
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{project.codeSnippet}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More/Less Button */}
        {projects.length > 2 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {showAll ? (
                <>
                  <span className="mr-2">↑</span>
                  Show Less Projects
                </>
              ) : (
                <>
                  <span className="mr-2">↓</span>
                  View More Projects ({projects.length - 2} more)
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
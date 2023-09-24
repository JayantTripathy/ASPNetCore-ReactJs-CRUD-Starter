using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ASPNetCore_ReactJs_CRUD.Models;

namespace ASPNetCore_ReactJs_CRUD.Data
{
    public class DataContext : DbContext
    {
        public DataContext (DbContextOptions<DataContext> options)
            : base(options)
        {
        }

        public DbSet<ASPNetCore_ReactJs_CRUD.Models.CreditCard> CreditCard { get; set; } = default!;
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }
    }
}
